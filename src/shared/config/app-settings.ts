import AppSettings, { LogLevel } from '@stypes/app-settings.types';

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
};

export default defaultSettings;
