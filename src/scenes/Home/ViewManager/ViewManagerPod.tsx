import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import useDataStatic from '@hooks/use-data-static';
// import useDataFirebase from '@hooks/use-data-firebase';
import logger from '@services/logger';
import ViewManager from './ViewManager';

type Params = {
  param1?: string;
};

const ViewManagerPod: FC = () => {
  logger.debug('TODO: ViewManager');

  // const dStatic = useDataStatic();
  // const dFire = useDataFirebase();

  // URL params
  const { param1 } = useParams<Params>();

  // State
  const [isReady, setIsReady] = useState<boolean>(false);

  // URL param effects
  useEffect(() => {
    if (param1) {
      logger.debug(`Param1: ${param1}`);
    }
  }, [param1]);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, [])

  return <ViewManager isReady={isReady} />;
};

export default ViewManagerPod;
