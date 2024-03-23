import { FC } from 'react';
import { Slide } from '@stypes/Slide.types';
import sy from './SlideDeck.scss';

type SlideDeckProps = {
  slide: Slide;
  sxImage: {
    backgroundImage: string;
    backgroundSize: string;
  };
  countLabel: string;
};

const SlideDeck: FC<SlideDeckProps> = (props) => {
  const { slide, sxImage, countLabel } = props;

  return (
    <div className={sy.edge}>
      <div className={sy.header}>
        <div className={sy.header_desc}>{slide.description}</div>
      </div>
      <div className={sy.main}>
        <div className={sy.image} style={sxImage}>
          <div className={sy.main_date}>{slide.creationTime}</div>
        </div>
      </div>
      <div className={sy.footer}>
        <div className={sy.footer_counts}>{countLabel}</div>
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
