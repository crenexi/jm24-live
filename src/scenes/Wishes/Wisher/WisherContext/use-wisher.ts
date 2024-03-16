import { useContext } from 'react';
import WisherContext from './WisherContext';

const useWisher = () => {
  const context = useContext(WisherContext);

  if (!context) {
    throw new Error('useWisher must be used within a WisherProvider');
  }

  return context;
};

export default useWisher;
