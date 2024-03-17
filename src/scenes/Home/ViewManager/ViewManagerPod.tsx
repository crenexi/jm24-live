import { FC, useState, useEffect } from 'react';

// import logger from '@services/logger';
import useQueryParam from '@hooks/use-query-param';
import ViewManager, { VIEWS } from './ViewManager';

const ViewManagerPod: FC = () => {
  const [view, setView] = useQueryParam('view');

  // State
  const [isReady, setIsReady] = useState<boolean>(false);

  // URL param effects
  useEffect(() => {
    if (!view) {
      setView(VIEWS.HELLO);
    }
  }, [view, setView]);

  // Loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <ViewManager isReady={isReady} view={view} />;
};

export default ViewManagerPod;
