import AppSettings, { LogLevel } from '@stypes/app-settings.types';
import { View } from '@stypes/View.types';
import { Album } from '@stypes/Slide.types';

const environment = (() => {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;
  const debug = !!process.env.DEBUG || false;
  const isProd = env === 'production';

  let logLevel: LogLevel = isProd ? 'warn' : 'info';
  if (debug) logLevel = 'debug';

  return { logLevel, debug };
})();

const defaultSettings: AppSettings = {
  theme: 'light',
  language: 'en',
  logLevel: environment.logLevel,
  debug: environment.debug,
  views: {
    [View.HELLO]: { interval: 19_500 },
    [View.STANDARDS]: { interval: 19_500 },
    [View.WISHES]: { interval: 19_500 },
    [View.VERTICALS]: { interval: 19_500 },
    [View.CALLOUT]: { interval: 19_500 },
    [View.FEATURES]: { interval: 19_500 },
  },
  albums: {
    [Album.STANDARDS]: {
      interval: 10_000,
      albumId: 'AKQc28SavPMLdYnUp5rowR3u78QIlflBGYUvSNpiztULixDBfBhMnKhSf4dGOXDoF0WhLwIf8OGl',
    },
    [Album.VERTICALS]: {
      interval: 10_000,
      albumId: 'AKQc28QgLm97RiMiwaVy_ndDf2QztVRXBsf4AH84GNiEPyHaIQb8OHjCbLKuPnlkoFf1UKiIMIq8',
    },
    [Album.FEATURES]: {
      interval: 10_000,
      albumId: 'AKQc28SFZIRajm33xu-9IlO_Ui90QX5aZgw_OR4Tiy1tLeELlZIhSgd7UpQV91efk5DJ9b1I3BSq',
    },
  }, // prettier-ignore
};

export default defaultSettings;
