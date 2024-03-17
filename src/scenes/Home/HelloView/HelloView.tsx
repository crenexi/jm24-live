import { FC, ReactNode } from 'react';
import sy from './HelloView.scss';

type HelloViewProps = {
  isReady: boolean;
};

const HelloView: FC<HelloViewProps> = (props) => {
  const { isReady } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>Hello View</div>
    </div>
  );
};

export default HelloView;
