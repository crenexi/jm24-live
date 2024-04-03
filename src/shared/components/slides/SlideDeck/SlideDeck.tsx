import { FC, Fragment } from 'react';
import { Slide } from '@stypes/Slide.types';
import { LoadingBlock } from '@components/feedback';
import SlideProgress from './SlideProgress';
import sy from './SlideDeck.scss';

type SlideDeckProps = {
  slide: Slide;
  sxImage: {
    backgroundImage: string;
    backgroundSize: string;
  };
  countLabel: string;
  currIndex: number;
  isLoading: boolean;
  isPlaying: boolean;
  interval: number;
};

const SlideDeck: FC<SlideDeckProps> = (props) => {
  const { slide, sxImage, countLabel, currIndex, interval } = props;
  const { isLoading, isPlaying } = props;

  return (
    <div className={sy.edge}>
      {isLoading ? (
        <LoadingBlock />
      ) : (
        <Fragment>
          <div className={sy.header}>
            <div className={sy.header_desc}>{slide.description}</div>
          </div>
          <div className={sy.main}>
            <div className={sy.image} style={sxImage}>
              {isPlaying && (
                <SlideProgress currIndex={currIndex} duration={interval} />
              )}
              <div className={sy.image_gap} />
              <div className={sy.image_date}>{slide.creationTime}</div>
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
        </Fragment>
      )}
    </div>
  );
};

export default SlideDeck;
