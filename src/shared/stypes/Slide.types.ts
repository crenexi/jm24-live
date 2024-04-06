import { Dispatch } from 'react';
import { ActionTypes } from '@contexts/SlidesContext/actions';

// Albums
export enum Album {
  STANDARDS = 'STANDARDS',
  VERTICALS = 'VERTICALS',
  FEATURES = 'FEATURES',
}

// Payloads
export type SetSlidesPay = { album: Album; slides: Slide[] };
export type ToNextPay = { album: Album };
export type ToPrevPay = { album: Album };

// Action definition
export type Action =
  | { type: ActionTypes.SET_ERROR; payload: string }
  | { type: ActionTypes.SET_FETCHING; payload: boolean }
  | { type: ActionTypes.SET_LOADING; payload: boolean }
  | { type: ActionTypes.SET_SLIDES; payload: SetSlidesPay }
  | { type: ActionTypes.TO_NEXT; payload: ToNextPay }
  | { type: ActionTypes.TO_PREV; payload: ToPrevPay }
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

// State: status
export type Status = {
  error: null | { message: string };
  isFetching: boolean;
  isLoading: boolean;
};

// State: deck
export type Deck = {
  groupCount: number;
  groupIndex: number;
  groupPrev: Slide[];
  groupCurr: Slide[];
  groupNext: Slide[];
};

// Context state
export type ContextState = {
  status: Status;
  slides: Record<string, Slide[]>;
  decks: Record<string, Deck>;
};

// Context value
export type ContextValue = {
  state: ContextState;
  dispatch: Dispatch<Action>;
};

// Hook return
export type UseSlidesReturn = ContextState & {
  actions: {
    setError: (payload: string) => void;
    setLoading: (payload: boolean) => void;
    toNext: (payload: ToNextPay) => void;
    toPrev: (payload: ToPrevPay) => void;
    restart: () => void;
  };
};
