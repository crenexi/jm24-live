import { useCallback } from 'react';
import { useQueries } from 'react-query';
import { Album } from '@stypes/Slide.types';
import appSettings from '@config/app-settings';
import photoService from '@services/photo-service';
import logger from '@services/logger';

const queryOpts = {
  staleTime: Infinity,
  cacheTime: 45 * 60 * 1000,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  keepPreviousData: true,
};

/* const testQueryOpts = {
  ...queryOpts,
  staleTime: 30_000,
  refetchInterval: 30_000,
}; */

const usePhotos = (albums: Album[]) => {
  const queryFn = useCallback(
    (album: Album) => async () => {
      const albumId = appSettings.albums[album].albumId;
      return photoService().read(albumId);
    },
    [],
  );

  return useQueries(
    albums.map((album) => ({
      queryKey: ['albumData', album],
      queryFn: queryFn(album),
      ...queryOpts,
      onError: (err: Error) => {
        logger.error(`Error fetching data for ${album} album`);
        logger.error(err.message);
      },
    })),
  );
};

export default usePhotos;
