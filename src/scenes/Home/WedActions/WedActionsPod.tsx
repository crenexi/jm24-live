import { useState, useEffect } from 'react';
import useDataStatic from '@hooks/use-data-static';
import WedActions from './WedActions';

const WedActionsPod: React.FC = () => {
  const dStatic = useDataStatic();

  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return <WedActions isReady={isReady} dStatic={dStatic} />;
};

export default WedActionsPod;
