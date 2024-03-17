import { FC, ReactNode } from 'react';
import sy from './HelloView.scss';

type HelloViewProps = {
  children?: ReactNode;
  isReady: boolean;
};

const HelloView: FC<HelloViewProps> = (props) => {
  const { children = 'TODO', isReady } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>{children}</div>
    </div>
  );
};

export default HelloView;
