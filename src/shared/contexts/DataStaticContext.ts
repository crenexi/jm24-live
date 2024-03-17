import { createContext } from 'react';
import DataStatic from '@stypes/data-static.types';
import dataStatic from '@config/data-static';

const DataStaticContext = createContext<DataStatic>(dataStatic);

export const DataStaticProvider = DataStaticContext.Provider;
export const DataStaticConsumer = DataStaticContext.Consumer;
export default DataStaticContext;
