import { FC, useState, useEffect } from 'react';
import { Loading, LoadingBlock } from '@components/feedback';
import { Block, BlockSet } from '../../index';
import sy from './KitFeedback.scss';

const KitFeedback: FC = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLoading((prevLoading) => !prevLoading);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={sy.edge}>
      <BlockSet heading="Extendable">
        <Block label="Loading Spinner">
          <div className={sy.loadingBlocks}>
            <div className={sy.loadingBlock}>
              {!loading ? 'Loaded' : <Loading size="sm" />}
            </div>
            <div className={sy.loadingBlock}>
              {!loading ? 'Loaded' : <Loading />}
            </div>
            <div className={sy.loadingBlock}>
              {!loading ? 'Loaded' : <Loading size="lg" />}
            </div>
          </div>
          <code>{`<Loading />`}</code>
        </Block>
        <Block label="Loading Block">
          <LoadingBlock iconName="yin-yang" />
          <code>{`<LoadingBlock iconName="yin-yang" padSize="sm" />`}</code>
        </Block>
      </BlockSet>
    </div>
  );
};

export default KitFeedback;
