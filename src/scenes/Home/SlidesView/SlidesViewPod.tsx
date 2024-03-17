import { FC, useState, useEffect } from 'react';
// import useDataStatic from '@hooks/use-data-static';
// import useDataFirebase from '@hooks/use-data-firebase';
import logger from '@services/logger';
import SlidesView from './SlidesView';

const SlidesViewPod: FC = () => {
  logger.debug('TODO: SlidesView');

  // const dStatic = useDataStatic();
  // const dFire = useDataFirebase();

  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, [])

  return <SlidesView isReady={isReady} />;
};

export default SlidesViewPod;
