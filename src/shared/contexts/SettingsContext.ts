import { createContext } from 'react';
import AppSettings from '@stypes/app-settings.types';
import appSettings from '@config/app-settings';

const DataHardContext = createContext<AppSettings | undefined>(appSettings);

export const SettingsProvider = DataHardContext.Provider;
export const SettingsConsumer = DataHardContext.Consumer;
export default DataHardContext;
