import { FC, useEffect } from 'react';
import appSettings from '@config/app-settings';
import logger from '@services/logger';
import { relativeTime } from '@helpers/index';
import { Album } from '@stypes/Slide.types';
import useViews from '@hooks/use-views';
import useSlides from '@hooks/use-slides';
import useSliderval from '@hooks/use-sliderval';
import { LoadingBlock } from '@components/feedback';
import { ErrorText } from '@components/display';
import { preloadImages } from '@helpers/index';
import FeaturesView from './FeaturesView';

const FeaturesViewPod: FC = () => {
  const srcQuery = 'w2000-h2000';

  const album = Album.FEATURES;
  const { interval } = appSettings.albums[album];

  const viewsStatus = useViews().state.status;
  const { status, decks, actions } = useSlides();
  const deck = decks[album];

  // Preload next image group
  useEffect(() => {
    if (!status.isLoading) {
      preloadImages(deck.groupNext.map((slide) => `${slide.url}=${srcQuery}`));
    }
  }, [status.isLoading, deck.groupIndex]);

  // On unmount, advance to the next slide
  useEffect(() => {
    return () => actions.toNext({ album });
  }, []);

  // Custom interval hook
  useSliderval({
    callback: () => actions.toNext({ album }),
    interval: viewsStatus.isPlaying ? interval : null,
    onError: (err) => {
      logger.error(err);
      actions.setError(`Interval error. ${err?.message}`);
    },
  });

  // Error and loading state
  if (status.error) return <ErrorText>{status.error.message}</ErrorText>;
  if (status.isLoading) return <LoadingBlock />;

  // No slide data
  if (!deck.groupCurr.length) return <p>No data</p>;

  const currSlide = deck.groupCurr[0];

  // If taller than wider
  const isVertical = Number(currSlide.height) > Number(currSlide.width);

  return (
    <FeaturesView
      slide={currSlide}
      timeAgo={relativeTime(currSlide.createdAt)}
      index={deck.groupIndex + 1}
      total={deck.groupCount}
      interval={interval}
      isPlaying={viewsStatus.isPlaying}
      isFetching={status.isFetching}
      isVertical={isVertical}
      srcQuery={srcQuery}
    />
  );
};

export default FeaturesViewPod;
