import { FC, useState, useEffect } from 'react';
// import logger from '@services/logger';
import CalloutView from './CalloutView';

const CalloutViewPod: FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, []);

  return <CalloutView isReady={isReady} />;
};

export default CalloutViewPod;
