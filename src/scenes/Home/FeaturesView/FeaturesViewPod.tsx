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
      actions.setError('Interval error');
    },
  });

  // Loading state
  if (status.isLoading) return <LoadingBlock />;

  // No slide data
  if (!deck.curr) return null;

  return (
    <FeaturesView
      slide={deck.curr}
      timeAgo={relativeTime(deck.curr.creationTime)}
      index={deck.currIndex + 1}
      total={deck.total}
      interval={interval}
      isPlaying={viewsStatus.isPlaying}
      isFetching={status.isFetching}
      isVertical={deck.curr.height > deck.curr.width}
    />
  );
};

export default FeaturesViewPod;
