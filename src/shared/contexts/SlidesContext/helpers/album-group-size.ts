import { Album } from '@stypes/Slide.types';

// Constant values for album sizes
const albumGroupSize = (album: Album) => {
  switch (album) {
    case Album.STANDARDS: return 4;
    case Album.VERTICALS: return 3;
    case Album.FEATURES: return 1;
    default: return 0;
  } // prettier-ignore
};

export default albumGroupSize;
