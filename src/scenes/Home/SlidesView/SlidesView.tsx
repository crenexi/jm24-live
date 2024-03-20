import { FC } from 'react';
import { Overline } from '@components/display';
import SlideDeck from './SlideDeck';
import sy from './SlidesView.scss';

type SlidesViewProps = {
  isReady: boolean;
};

const SlidesView: FC<SlidesViewProps> = (props) => {
  const { isReady } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.aside}>
          <Overline icon="house-building" />
        </div>
        <SlideDeck />
        <div className={sy.aside}>
          <Overline icon="trees" />
        </div>
      </div>
    </div>
  );
};

export default SlidesView;
