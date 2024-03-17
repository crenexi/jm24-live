import { FC, ReactNode } from 'react';
import sy from './ViewManager.scss';

type ViewManagerProps = {
  children?: ReactNode;
  isReady: boolean;
};

const ViewManager: FC<ViewManagerProps> = (props) => {
  const { children = 'TODO', isReady } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>{children}</div>
    </div>
  );
};

export default ViewManager;
