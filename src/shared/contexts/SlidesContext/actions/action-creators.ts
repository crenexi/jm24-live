import { Mode } from '../types';
import ActionTypes from './action-types';

// Creator: TO_NEXT
export const toNextAction = () => ({
  type: ActionTypes.TO_NEXT,
});

// Creator: TO_PREV
export const toPrevAction = () => ({
  type: ActionTypes.TO_PREV,
});

// Creator: TO_SLIDE
export const toSlideAction = (index: number) => ({
  type: ActionTypes.TO_SLIDE,
  payload: index,
});

// Creator: SET_MODE
export const setModeAction = (mode: Mode) => ({
  type: ActionTypes.SET_MODE,
  payload: mode,
});

// Creator: SET_ERROR
export const setErrorAction = (error: string) => ({
  type: ActionTypes.SET_ERROR,
  payload: error,
});

// Creator: RESTART
export const restartAction = () => ({
  type: ActionTypes.RESTART,
});
