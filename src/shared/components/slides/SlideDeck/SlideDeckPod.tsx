import { FC, useEffect } from 'react';
import logger from '@services/logger';
import useViews from '@hooks/use-views';
import useSlides from '@hooks/use-slides';
import useSliderval from '@hooks/use-sliderval';
import { LoadingBlock } from '@components/feedback';
import { Album, Slide } from '@stypes/Slide.types';
import SlideDeck, { SlideDeckData } from './SlideDeck';

type SlideDeckPodProps = {
  album: Album;
  interval: number;
};

const SlideDeckPod: FC<SlideDeckPodProps> = ({ album, interval }) => {
  const viewsStatus = useViews().state.status;
  const { status, decks, actions } = useSlides();
  const deck = decks[album];

  // On unmount, advance to the next slide
  useEffect(() => {
    return () => actions.toNext({ album });
  }, []);

  // Loading state
  if (status.isLoading) return <LoadingBlock />;

  // No slide data
  if (!deck.curr) return null;

  // Custom interval hook
  // useSliderval({
  //   callback: () => actions.toNext({ album }),
  //   interval: isPlaying ? interval : null,
  //   onError: (err) => {
  //     logger.error(err);
  //     actions.setError('Interval error');
  //   },
  // });

  const deckData: SlideDeckData = {
    interval,
    slide: deck.curr,
    index: deck.currIndex + 1,
    total: deck.total,
    isPlaying: viewsStatus.isPlaying,
    isVertical: deck.curr.height > deck.curr.width,
  };

  return <SlideDeck data={deckData} />;
};

export default SlideDeckPod;
