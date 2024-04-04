import { FC } from 'react';
import { Album } from '@stypes/Slide.types';
import { SlideDeck } from '@components/slides';
import sy from './FeaturesView.scss';

const interval = 5_000;

const FeaturesView: FC = () => {
  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <SlideDeck album={Album.FEATURES} interval={interval} />
      </div>
    </div>
  );
};

export default FeaturesView;
