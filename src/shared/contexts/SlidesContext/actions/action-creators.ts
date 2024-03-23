import { SlidesAction, Slide, Mode } from '@stypes/Slide.types';
import ActionTypes from './action-types';

// Creator: TO_NEXT
export const toNextAction = (): SlidesAction => ({
  type: ActionTypes.TO_NEXT,
});

// Creator: TO_PREV
export const toPrevAction = (): SlidesAction => ({
  type: ActionTypes.TO_PREV,
});

// Creator: TO_SLIDE
export const toSlideAction = (index: number): SlidesAction => ({
  type: ActionTypes.TO_SLIDE,
  payload: index,
});

// Creator: SET_SLIDES
export const setSlidesAction = (slides: Slide[]): SlidesAction => ({
  type: ActionTypes.SET_SLIDES,
  payload: slides,
});

// Creator: SET_LOADING
export const setLoadingAction = (isLoading: boolean): SlidesAction => ({
  type: ActionTypes.SET_LOADING,
  payload: isLoading,
});

// Creator: SET_MODE
export const setModeAction = (mode: Mode): SlidesAction => ({
  type: ActionTypes.SET_MODE,
  payload: mode,
});

// Creator: SET_ERROR
export const setErrorAction = (error: string): SlidesAction => ({
  type: ActionTypes.SET_ERROR,
  payload: error,
});

// Creator: RESTART
export const restartAction = (): SlidesAction => ({
  type: ActionTypes.RESTART,
});
