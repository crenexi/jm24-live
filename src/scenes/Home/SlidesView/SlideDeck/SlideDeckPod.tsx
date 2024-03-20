import { FC, useState, useEffect } from 'react';
import { Slide } from '@stypes/Slide.types';
// import logger from '@services/logger';
import SlideDeck from './SlideDeck';

const SlideDeckPod: FC = () => {
  const fakeIndex = 0;
  const fakeTotal = 400;
  const fakeImage = { width: 1920, height: 1080 };
  const fakeSlide: Slide = {
    description: 'Description',
    date: 'May 10, 2024',
    url: 'https://stage-live.jm2024.com/assets/test.jpg',
  };

  // Default slide state
  const defaultState = {
    isReady: false,
    counts: '',
  };

  // Slide state
  const [slideState, setSlideState] = useState(defaultState);

  // Image orientation
  const isVertical = fakeImage.height > fakeImage.width;

  // Image style properties
  const sxImage = {
    backgroundImage: `url('${fakeSlide.url}')`,
    backgroundSize: isVertical ? 'contain' : 'cover',
  };

  // Loading
  useEffect(() => {
    setSlideState((prevState) => ({
      ...prevState,
      isReady: true,
      counts: `${fakeIndex + 1} / ${fakeTotal}`,
    }));
  }, []);

  return <SlideDeck slide={fakeSlide} sxImage={sxImage} state={slideState} />;
};

export default SlideDeckPod;
