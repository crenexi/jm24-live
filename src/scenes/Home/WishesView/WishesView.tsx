import { FC, ReactNode } from 'react';
import sy from './WishesView.scss';

type WishesViewProps = {
  children?: ReactNode;
  isReady: boolean;
};

const WishesView: FC<WishesViewProps> = (props) => {
  const { children = 'TODO', isReady } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>{children}</div>
    </div>
  );
};

export default WishesView;
