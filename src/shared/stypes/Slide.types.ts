import { Dispatch } from 'react';
import { ActionTypes } from '@contexts/SlidesContext/actions';

// Enum: slide mode
export type Mode = 'play' | 'pause';

// Action definition
export type SlidesAction =
  | { type: ActionTypes.TO_NEXT }
  | { type: ActionTypes.TO_PREV }
  | { type: ActionTypes.TO_SLIDE; payload: number }
  | { type: ActionTypes.SET_MODE; payload: Mode }
  | { type: ActionTypes.SET_ERROR; payload: string }
  | { type: ActionTypes.RESTART };

// Slide data
export type Slide = {
  id: string;
  url: string;
  description: string;
  creationTime: string;
  width: string;
  height: string;
};

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

// Hook return
export type UseSlidesReturn = SlidesContextState & {
  actions: {
    toNext: () => void;
    toPrev: () => void;
    toSlide: (index: number) => void;
    setMode: (mode: Mode) => void;
    restart: () => void;
    setError: (error: string) => void;
  };
};
