import { FC, ReactNode } from 'react';
import sy from './WishesView.scss';

type WishesViewProps = {
  isReady: boolean;
};

const WishesView: FC<WishesViewProps> = (props) => {
  const { isReady } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>Wishes View</div>
    </div>
  );
};

export default WishesView;
