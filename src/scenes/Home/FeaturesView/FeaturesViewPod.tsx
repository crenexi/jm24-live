import { FC, useEffect } from 'react';
import appSettings from '@config/app-settings';
import logger from '@services/logger';
import { relativeTime } from '@helpers/index';
import { Album } from '@stypes/Slide.types';
import useViews from '@hooks/use-views';
import useSlides from '@hooks/use-slides';
import useSliderval from '@hooks/use-sliderval';
import { LoadingBlock } from '@components/feedback';
import FeaturesView from './FeaturesView';

const FeaturesViewPod: FC = () => {
  const album = Album.FEATURES;
  const { interval } = appSettings.albums[album];

  const viewsStatus = useViews().state.status;
  const { status, decks, actions } = useSlides();
  const deck = decks[album];

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

  // Loading state
  if (status.isLoading) return <LoadingBlock />;

  // No slide data
  if (!deck.groupCurr.length) return null;
  const currSlide = deck.groupCurr[0];

  return (
    <FeaturesView
      slide={currSlide}
      timeAgo={relativeTime(currSlide.creationTime)}
      index={deck.groupIndex + 1}
      total={deck.groupCount}
      interval={interval}
      isPlaying={viewsStatus.isPlaying}
      isFetching={status.isFetching}
      isVertical={currSlide.height > currSlide.width}
    />
  );
};

export default FeaturesViewPod;
