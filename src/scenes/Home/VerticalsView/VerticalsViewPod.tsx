import { FC, useState, useEffect } from 'react';
// import logger from '@services/logger';
import VerticalsView from './VerticalsView';

const VerticalsViewPod: FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, []);

  return <VerticalsView isReady={isReady} />;
};

export default VerticalsViewPod;
