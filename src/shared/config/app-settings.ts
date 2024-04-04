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
    [Album.STANDARDS]: { interval: 10_000 },
    [Album.VERTICALS]: { interval: 10_000 },
    [Album.FEATURES]: { interval: 10_000 },
  },
};

export default defaultSettings;
