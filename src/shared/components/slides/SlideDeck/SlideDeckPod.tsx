import { FC, useEffect } from 'react';
import appSettings from '@config/app-settings';
import logger from '@services/logger';
import useViews from '@hooks/use-views';
import useSlides from '@hooks/use-slides';
import useSliderval from '@hooks/use-sliderval';
import { Album } from '@stypes/Slide.types';
import SlideDeck from './SlideDeck';

type SlideDeckPodProps = {
  album: Album;
  interval: number;
};

const SlideDeckPod: FC<SlideDeckPodProps> = ({ album, interval }) => {
  const { isPlaying } = useViews().state.status;
  const { status, deck, actions } = useSlides();

  // Custom interval hook
  useSliderval({
    callback: () => actions.toNext({ album }),
    interval: isPlaying ? interval : null,
    onError: (err) => {
      logger.error(err);
      actions.setError('Interval error');
    },
  });

  // Advance slide on unmount
  useEffect(() => {
    return () => actions.toNext({ album });
  }, []);

  // No slide data
  const currIndex = deck[album].currIndex;
  const currSlide = deck[album].curr;
  if (!currSlide) return <div />;

  // Prepare UI data
  const countLabel = `${deck[album].currIndex + 1} / ${deck.total}`;
  const isVertical = currSlide.height > currSlide.width;

  // Image style properties
  const sxImage = {
    backgroundImage: `url('${currSlide.url}')`,
    backgroundSize: isVertical ? 'contain' : 'cover',
  };

  return (
    <SlideDeck
      slide={currSlide}
      sxImage={sxImage}
      countLabel={countLabel}
      currIndex={currIndex}
      isLoading={status.isLoading}
      isPlaying={isPlaying}
      interval={interval}
    />
  );
};

export default SlideDeckPod;
