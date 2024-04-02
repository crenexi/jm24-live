import { FC } from 'react';
import { LoadingBlock } from '@components/feedback';
// import SlideDeck from './SlideDeck';
import sy from './FeaturesView.scss';

type FeaturesViewProps = {
  isReady: boolean;
};

const FeaturesView: FC<FeaturesViewProps> = (props) => {
  const { isReady } = props;

  // Loading
  if (!isReady) return <LoadingBlock />;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>TODO</div>
    </div>
  );
};

export default FeaturesView;
