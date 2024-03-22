import { Dispatch } from 'react';
import { Slide } from '@stypes/Slide.types';
import { ActionTypes } from '../actions';

export type Mode = 'play' | 'pause';

// Enum: action types
export type SlidesAction =
  | { type: ActionTypes.TO_NEXT }
  | { type: ActionTypes.TO_PREV }
  | { type: ActionTypes.TO_SLIDE; payload: number }
  | { type: ActionTypes.SET_MODE; payload: Mode }
  | { type: ActionTypes.SET_ERROR; payload: string }
  | { type: ActionTypes.RESTART };

// State: error
export type SlidesError = null | {
  message: string;
};

// State: status
export type SlidesStatus = {
  isFetching: boolean;
  isLoading: boolean;
  isPlaying: boolean;
};

// State: deck
export type SlidesDeck = {
  currIndex: number;
  prev: Slide | null;
  curr: Slide | null;
  next: Slide | null;
};

// Context state
export type SlidesContextState = {
  error: SlidesError;
  status: SlidesStatus;
  deck: SlidesDeck;
};

// Context value
export type SlidesContextValue = {
  state: SlidesContextState;
  dispatch: Dispatch<SlidesAction>;
};
