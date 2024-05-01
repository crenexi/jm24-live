import { PhotoService } from './photo-service.types';
import { readPhotos } from './functions';

const photoService = (): PhotoService => {
  return {
    read: (albumId) => readPhotos(albumId),
  };
};

export default photoService;
