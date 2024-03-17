import { FC, useState, useEffect } from 'react';
// import useDataStatic from '@hooks/use-data-static';
// import useDataFirebase from '@hooks/use-data-firebase';
import logger from '@services/logger';
import HelloView from './HelloView';

const HelloViewPod: FC = () => {
  logger.debug('TODO: HelloView');

  // const dStatic = useDataStatic();
  // const dFire = useDataFirebase();

  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, [])

  return <HelloView isReady={isReady} />;
};

export default HelloViewPod;
