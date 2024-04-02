import { FC } from 'react';
import { LoadingBlock } from '@components/feedback';
import sy from './VerticalsView.scss';

type VerticalsViewProps = {
  isReady: boolean;
};

const VerticalsView: FC<VerticalsViewProps> = (props) => {
  const { isReady } = props;

  // Loading
  if (!isReady) return <LoadingBlock />;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>TODO</div>
    </div>
  );
};

export default VerticalsView;
