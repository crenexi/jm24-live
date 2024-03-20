import { FC } from 'react';
import { Overline } from '@components/display';
import WishList from './WishList';
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
      <div className={sy.logo}>&nbsp;</div>
      <div className={sy.wishes}>
        <Overline label="Wishes" icon="comment-lines" />
        <WishList />
      </div>
      <div className={sy.photos}>&nbsp;</div>
      <div className={sy.share}>
        <Overline label="Got Vids?" icon="video" />
      </div>
      <div className={sy.wifi}>
        <Overline icon="wifi" />
      </div>
    </div>
  );
};

export default WishesView;
