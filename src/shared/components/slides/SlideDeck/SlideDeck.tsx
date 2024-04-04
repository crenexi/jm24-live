import { FC } from 'react';
import { Slide } from '@stypes/Slide.types';
import SlideProgress from './SlideProgress';
import sy from './SlideDeck.scss';

export type SlideDeckData = {
  slide: Slide;
  index: number;
  total: number;
  interval: number;
  isPlaying: boolean;
  isVertical: boolean;
};

const SlideDeck: FC<{ data: SlideDeckData }> = ({ data }) => {
  const { slide, index, total, interval, isPlaying, isVertical } = data;

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
          <div className={sy.image_date}>{slide.creationTime}</div>
        </div>
      </div>
      <div className={sy.footer}>
        <div className={sy.footer_counts}>{counts}</div>
        <div className={sy.footer_prompt}>
          <span>
            Share at <strong>go.jm2024.com</strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SlideDeck;
