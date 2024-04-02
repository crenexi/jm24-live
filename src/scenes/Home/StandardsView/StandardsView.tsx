import { FC } from 'react';
import { LoadingBlock } from '@components/feedback';
import sy from './StandardsView.scss';

type StandardsViewProps = {
  isReady: boolean;
};

const StandardsView: FC<StandardsViewProps> = (props) => {
  const { isReady } = props;

  // Loading
  if (!isReady) return <LoadingBlock />;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>TODO</div>
    </div>
  );
};

export default StandardsView;
