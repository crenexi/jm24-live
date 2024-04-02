import { FC, useState, useEffect } from 'react';
// import logger from '@services/logger';
import FeaturesView from './FeaturesView';

const FeaturesViewPod: FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, []);

  return <FeaturesView isReady={isReady} />;
};

export default FeaturesViewPod;
