import { Action, SetSlidesPay, ToNextPay, ToPrevPay, Status } from '@stypes/Slide.types'; // prettier-ignore
import ActionTypes from './action-types';

// Creator SET_STATUS
export const setStatusAction = (payload: Status): Action => ({
  type: ActionTypes.SET_STATUS,
  payload,
});

// Creator: SET_ERROR
export const setErrorAction = (payload: string): Action => ({
  type: ActionTypes.SET_ERROR,
  payload,
});

// Creator: SET_FETCHING
export const setFetchingAction = (payload: boolean): Action => ({
  type: ActionTypes.SET_FETCHING,
  payload,
});

// Creator: SET_LOADING
export const setLoadingAction = (payload: boolean): Action => ({
  type: ActionTypes.SET_LOADING,
  payload,
});

// Creator: SET_SLIDES
export const setSlidesAction = (payload: SetSlidesPay): Action => ({
  type: ActionTypes.SET_SLIDES,
  payload,
});

// Creator: TO_NEXT
export const toNextAction = (payload: ToNextPay): Action => ({
  type: ActionTypes.TO_NEXT,
  payload,
});

// Creator: TO_PREV
export const toPrevAction = (payload: ToPrevPay): Action => ({
  type: ActionTypes.TO_PREV,
  payload,
});

// Creator: RESTART
export const restartAction = (): Action => ({
  type: ActionTypes.RESTART,
});
