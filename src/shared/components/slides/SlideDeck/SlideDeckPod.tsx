import { FC, useEffect, useState } from 'react';
import appSettings from '@config/app-settings';
import logger from '@services/logger';
import useSlides from '@hooks/use-slides';
import useSliderval from '@hooks/use-sliderval';
import SlideDeck from './SlideDeck';

const SlideDeckPod: FC = () => {
  const { status, deck, actions } = useSlides();
  const interval = appSettings.slideDuration;

  // Custom interval hook
  useSliderval({
    callback: actions.toNext,
    interval: status.isPlaying ? interval : null,
    onError: (err) => {
      logger.error(err);
      actions.setError('Interval error');
    },
  });

  // Advance slide on unmount
  useEffect(() => {
    return () => actions.toNext();
  }, []);

  // No slide data
  if (!deck.curr) return <div />;

  // Prepare UI data
  const currSlide = deck.curr;
  const countLabel = `${deck.currIndex + 1} / ${deck.total}`;
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
      currIndex={deck.currIndex}
      isLoading={status.isLoading}
      isPlaying={status.isPlaying}
    />
  );
};

export default SlideDeckPod;
