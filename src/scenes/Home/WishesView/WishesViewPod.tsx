import { FC, useState, useEffect } from 'react';
// import useDataStatic from '@hooks/use-data-static';
// import useDataFirebase from '@hooks/use-data-firebase';
import logger from '@services/logger';
import WishesView from './WishesView';

const WishesViewPod: FC = () => {
  logger.debug('TODO: WishesView');

  // const dStatic = useDataStatic();
  // const dFire = useDataFirebase();

  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, [])

  return <WishesView isReady={isReady} />;
};

export default WishesViewPod;
