import { FC } from 'react';
import { Slide } from '@stypes/Slide.types';
import { SlideProgress } from '@components/slides';
import sy from './FeaturesView.scss';

export type FeaturesViewProps = {
  slide: Slide;
  timeAgo: string;
  index: number;
  total: number;
  interval: number;
  isPlaying: boolean;
  isFetching: boolean;
  isVertical: boolean;
};

const FeaturesView: FC<FeaturesViewProps> = (props) => {
  const { slide, timeAgo, index, total, interval } = props;
  const { isPlaying, isVertical, isFetching } = props;
  const counts = `${index} / ${total}`;

  const sxImage = {
    backgroundImage: `url('${slide.url}')`,
    backgroundSize: isVertical ? 'contain' : 'cover',
  };

  return (
    <div className={sy.edge}>
      <div className={sy.header}>
        <div className={sy.header_desc}>{slide.description}</div>
      </div>
      <div className={sy.main}>
        <div className={sy.image} style={sxImage}>
          {isPlaying && (
            <SlideProgress slideId={slide.id} duration={interval} />
          )}
          <div className={sy.image_gap} />
          <div className={sy.image_date}>{timeAgo}</div>
        </div>
      </div>
      <div className={sy.footer}>
        <div className={sy.footer_counts}>{counts}</div>
        <div className={sy.footer_center} />
        <div className={sy.footer_status}>{isFetching && 'UPDATING..'}</div>
      </div>
    </div>
  );
};

export default FeaturesView;
