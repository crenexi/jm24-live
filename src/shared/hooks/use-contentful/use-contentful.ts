import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import contentfulService from '@services/contentful';
import logger from '@services/logger';
import { Err } from '@services/contentful/contentful.types';
import { ItemMeta, NewItem, UseContentfulReturn } from './use-contentful.types';
import pollForChanges from './poll-for-changes';

const useContentful = <T extends ItemMeta>(
  endpoint: string,
): UseContentfulReturn<T> => {
  const service = contentfulService<T>();
  const queryClient = useQueryClient();

  // Custom error state
  const [error, setError] = useState<null | { message: string }>(null);

  // Custom error handling
  const handleErr = (err: Err) => {
    switch (err.type) {
      case 'NetworkErr':
        logger.warn(err);
        break;
      case 'APIErr':
        logger.error(err);
        setError({ message: err.message });
        break;
      case 'UnknownErr':
        logger.error(err);
        setError({ message: err.message });
        break;
      default:
    }
  };

  // Fetch and manage data
  const { data, isLoading } = useQuery<T[], Error>(
    [endpoint],
    () => service.read(endpoint),
    {
      staleTime: 5 * 60 * 1000, // freshen data in 5m
      cacheTime: 15 * 60 * 1000, // garbage unused data in 15m
      refetchOnWindowFocus: true, // refetch on window focus
      onError: (err) => handleErr(err as Err),
    },
  );

  // Helper for polling
  const startPolling = (successFn: (fetched: T[]) => boolean) => {
    pollForChanges<T>({
      successFn,
      serviceFn: () => {
        return service.read(endpoint);
      },
      onSuccess: () => {
        return queryClient.invalidateQueries([endpoint]);
      },
      onError: (err) => {
        setError({ message: err.message });
      },
    });
  };

  // Mutations: add item to data
  const createFn = (newItem: NewItem<T>) => service.create(endpoint, newItem);
  const addMutation = useMutation(createFn, {
    onMutate: async (newItem: NewItem<T>) => {
      // Prevent ongoing fetches and save items
      await queryClient.cancelQueries([endpoint]);
      const previousItems = queryClient.getQueryData<T[]>([endpoint]) ?? [];

      const tempItem = {
        ...newItem,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        optimistic: true,
      } as T;

      // Optimistically update data and return previous
      queryClient.setQueryData<T[]>([endpoint], (old = []) => [
        ...old,
        tempItem,
      ]);
      return { previousItems };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err, newItem, context: any) => {
      if (context?.previousItems) {
        queryClient.setQueryData([endpoint], context.previousItems);
      }
    },
    onSuccess: (resData) => {
      if (!resData?.id) logger.warn('No ID was returned from new post');
    },
    onSettled: (resData) => {
      // Poller: checks to see when the new item is included in Contentful
      startPolling((fetched: T[]) => {
        return fetched.some((item) => item.id === (resData as T).id);
      });
    },
  });

  // Mutation: remove item from data
  const deleteFn = (id: string) => service.delete(`${endpoint}/${id}`);
  const removeMutation = useMutation(deleteFn, {
    onMutate: async (id: string) => {
      // Prevent ongoing fetches and save items
      await queryClient.cancelQueries([endpoint]);
      const previousItems = queryClient.getQueryData<T[]>([endpoint]) ?? [];

      // Optimistically update data and return previous
      queryClient.setQueryData<T[]>([endpoint], (old = []) => {
        return old.filter((item) => item.id !== id);
      });

      return { previousItems, id };
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err, context: any) => {
      if (context?.previousItems) {
        queryClient.setQueryData([endpoint], context.previousItems);
      }
    },
    onSettled: (resData, error, variables, context) => {
      // Poller: checks to see when item is removed in Contentful
      startPolling((fetched: T[]) => {
        return !fetched.some((item) => item.id === context?.id);
      });
    },
  });

  // Hook return
  const listful = {
    add: (item: NewItem<T>) => addMutation.mutateAsync(item),
    remove: (id: string) => removeMutation.mutate(id),
  };

  return { data, isLoading, error, listful };
};

export default useContentful;
