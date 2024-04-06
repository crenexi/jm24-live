import { FC, useEffect } from 'react';
import appSettings from '@config/app-settings';
import logger from '@services/logger';
import { Album } from '@stypes/Slide.types';
import useViews from '@hooks/use-views';
import useSlides from '@hooks/use-slides';
import useSliderval from '@hooks/use-sliderval';
import { LoadingBlock } from '@components/feedback';
import VerticalsView from './VerticalsView';

const VerticalsViewPod: FC = () => {
  const album = Album.VERTICALS;
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

  // No slide data
  if (!deck.groupCurr.length) return null;
  const currSlides = deck.groupCurr.slice(0, 4);

  // Loading state
  if (status.isLoading) return <LoadingBlock />;

  return (
    <VerticalsView
      slides={currSlides}
      index={deck.groupIndex + 1}
      total={deck.groupCount}
      interval={interval}
      isPlaying={viewsStatus.isPlaying}
      isFetching={status.isFetching}
    />
  );
};

export default VerticalsViewPod;
