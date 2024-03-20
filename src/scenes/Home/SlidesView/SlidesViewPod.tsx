import { FC, useState, useEffect } from 'react';
// import useDataStatic from '@hooks/use-data-static';
// import logger from '@services/logger';
import SlidesView from './SlidesView';

const SlidesViewPod: FC = () => {
  // const dStatic = useDataStatic();

  const [isReady, setIsReady] = useState<boolean>(false);

  // Loading
  useEffect(() => {
    setIsReady(true);
  }, []);

  return <SlidesView isReady={isReady} />;
};

export default SlidesViewPod;
