import { createContext } from 'react';
import DataStatic from '@stypes/data-static.types';

const DataStaticContext = createContext<DataStatic>({});

export const DataStaticProvider = DataStaticContext.Provider;
export const DataStaticConsumer = DataStaticContext.Consumer;
export default DataStaticContext;
