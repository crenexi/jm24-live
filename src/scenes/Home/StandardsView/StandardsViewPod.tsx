import { FC, useState, useEffect } from 'react';
// import logger from '@services/logger';
import StandardsView from './StandardsView';

const StandardsViewPod: FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, []);

  return <StandardsView isReady={isReady} />;
};

export default StandardsViewPod;
