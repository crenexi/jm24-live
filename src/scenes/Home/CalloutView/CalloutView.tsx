import { FC } from 'react';
import { LoadingBlock } from '@components/feedback';
// import SlideDeck from './SlideDeck';
import sy from './CalloutView.scss';

type CalloutViewProps = {
  isReady: boolean;
};

const CalloutView: FC<CalloutViewProps> = (props) => {
  const { isReady } = props;

  // Loading
  if (!isReady) return <LoadingBlock />;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>TODO</div>
    </div>
  );
};

export default CalloutView;
