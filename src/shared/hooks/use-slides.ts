import { useContext } from 'react';
import { Mode, UseSlidesReturn } from '@stypes/Slide.types';
import SlidesContext from '@contexts/SlidesContext';

import {
  toNextAction,
  toPrevAction,
  toSlideAction,
  setModeAction,
  restartAction,
  setErrorAction,
} from '@contexts/SlidesContext/actions';

type UseSlides = () => UseSlidesReturn;

const useSlides: UseSlides = () => {
  const context = useContext(SlidesContext);

  if (!context?.state || !context?.dispatch) {
    throw new Error('useSlides must be used within a SlidesProvider');
  }

  const { state, dispatch } = context;

  const toNext = () => dispatch(toNextAction());
  const toPrev = () => dispatch(toPrevAction());
  const toSlide = (index: number) => dispatch(toSlideAction(index));
  const setMode = (mode: Mode) => dispatch(setModeAction(mode));
  const restart = () => dispatch(restartAction());
  const setError = (error: string) => dispatch(setErrorAction(error));

  return {
    ...state, // error, status, deck
    actions: { toNext, toPrev, toSlide, setMode, restart, setError },
  };
};

export default useSlides;
