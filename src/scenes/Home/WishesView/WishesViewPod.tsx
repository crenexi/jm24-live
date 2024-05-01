import { FC, useState, useEffect } from 'react';
// import useDataStatic from '@hooks/use-data-static';
// import logger from '@services/logger';
import useContentful from '@hooks/use-contentful';
import WishesView from './WishesView';

const WishesViewPod: FC = () => {
  // const dStatic = useDataStatic();

  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, []);

  return <WishesView isReady={isReady} />;
};

export default WishesViewPod;
