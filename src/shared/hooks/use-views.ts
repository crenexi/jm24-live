import { useContext } from 'react';
import { ContextValue } from '@stypes/View.types';
import ViewsContext from '@contexts/ViewsContext';

const useViews = (): ContextValue => {
  const context = useContext(ViewsContext);

  if (!context?.state) {
    throw new Error('useViews must be used within ViewsProvider');
  }

  return context;
};

export default useViews;
