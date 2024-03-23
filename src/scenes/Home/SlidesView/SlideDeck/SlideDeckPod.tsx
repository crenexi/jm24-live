import { FC, useEffect } from 'react';
import useSlides from '@hooks/use-slides';
import useSliderval from '@hooks/use-sliderval';
import SlideDeck from './SlideDeck';

const SlideDeckPod: FC = () => {
  const { status, deck, actions } = useSlides();

  // Custom interval hook
  useSliderval({
    callback: actions.toNext,
    interval: status.isPlaying ? 5000 : null,
    onError: (err) => {
      console.error(err);
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
      isLoading={status.isLoading}
      slide={currSlide}
      sxImage={sxImage}
      countLabel={countLabel}
    />
  );
};

export default SlideDeckPod;
