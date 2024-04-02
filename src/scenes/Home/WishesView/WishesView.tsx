import { FC } from 'react';
import dStatic from '@config/data-static';
import { Overline } from '@components/display';
import NewsReel from './NewsReel';
import WishList from './WishList';
import sy from './WishesView.scss';

type WishesViewProps = {
  isReady: boolean;
};

const WishesView: FC<WishesViewProps> = (props) => {
  const { isReady } = props;
  const { urlCoverBranches } = dStatic;

  const sxEdge = {
    backgroundImage: `url('${urlCoverBranches}')`,
  };

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge} style={sxEdge}>
      <div className={sy.main}>
        <div className={sy.main_top} />
        <div className={sy.main_bottom}>
          <NewsReel />
        </div>
      </div>
      <div className={sy.aside}>
        <Overline label="Wishes" icon="comment-lines" />
        <WishList />
      </div>
    </div>
  );
};

export default WishesView;
