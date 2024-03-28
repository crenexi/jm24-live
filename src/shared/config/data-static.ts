import DataStatic from '@stypes/data-static.types';
import dataQuotes from './data-quotes.json';
import { assetsUrl } from '../constants';

// prettier-ignore
const dataStatic: DataStatic = {
  urlLogoGIF: `${assetsUrl}/brand/logo.gif`,
  urlFavSVG: `${assetsUrl}/brand/fav.svg`,
  urlCoverBirdside: `${assetsUrl}/covers/birdside.png`,
  urlCoverBranches: `${assetsUrl}/covers/branches.jpg`,
  urlCoverGateway: `${assetsUrl}/covers/gateway.jpg`,
  urlCoverSunrays: `${assetsUrl}/covers/sunrays.jpg`,
};

export { dataQuotes };

export default dataStatic;
