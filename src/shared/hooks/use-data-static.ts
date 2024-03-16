import { useContext } from 'react';
import DataStaticContext from '@contexts/DataStaticContext';

const useDataStatic = () => useContext(DataStaticContext);

export default useDataStatic;
