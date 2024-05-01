import { useState } from 'react';
import { useQueries } from 'react-query';
import { Album } from '@stypes/Slide.types';
import logger from '@services/logger';
import photoService from '@services/photo-service';
import appSettings from '@config/app-settings';

const queryOpts = {
  staleTime: Infinity,
  cacheTime: 45 * 60 * 1000,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  keepPreviousData: true,
};

const useAlbumQueries = (albums: Album[]) => {
  const [errMessage, setErrMessage] = useState<string>('');

  const queries = useQueries(
    albums.map((album) => {
      const { albumId } = appSettings.albums[album];

      return {
        queryKey: ['photos', album],
        queryFn: async () => {
          const slides = await photoService().read(albumId);
          return slides;
        },
        ...queryOpts,
      };
    }),
  );

  const isLoading = queries.some((query) => query.isLoading);
  const isError = queries.some((query) => query.isError);
  const isSuccess = queries.every((query) => query.isSuccess);

  // Determine the first error message if any error exists
  const firstErr = queries.find((query) => query.isError)?.error;

  // Set error message
  if (firstErr && isError) {
    const isErrType = firstErr instanceof Error;

    logger.error(firstErr);
    setErrMessage(isErrType ? firstErr.message : 'Failed to fetch slides');
  }

  return {
    queries,
    isLoading,
    isSuccess,
    isError,
    errMessage,
  };
};

export default useAlbumQueries;
