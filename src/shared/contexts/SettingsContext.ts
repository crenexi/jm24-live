import { createContext } from 'react';
import AppSettings from '@stypes/app-settings.types';

const defaults: AppSettings = {
  theme: 'light',
  language: 'en',
  logLevel: 'info',
  splashDuration: 2000,
  debug: false,
};

const DataHardContext = createContext<AppSettings | undefined>(defaults);

export const SettingsProvider = DataHardContext.Provider;
export const SettingsConsumer = DataHardContext.Consumer;
export default DataHardContext;
