import { FC, useState, useEffect } from 'react';
import { Slide } from '@stypes/Slide.types';
// import logger from '@services/logger';
import SlideDeck from './SlideDeck';

const SlideDeckPod: FC = () => {
  const fakeIndex = 0;
  const fakeTotal = 400;
  const fakeImage = { width: 1920, height: 1080 };

  // prettier-ignore
  const fakeSlide: Slide = {
    id: '1234',
    url: 'https://stage-live.jm2024.com/assets/test.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio',
    creationTime: '2024-12-31T00:00:00',
    width: '1920',
    height: '1080',
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
