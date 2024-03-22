import { ReactNode as Node, FC, Reducer } from 'react';
import { createContext, useReducer } from 'react';
import {
  SlidesContextState,
  SlidesContextValue,
  SlidesAction,
} from '@stypes/Slide.types';
import slidesReducer from './slides-reducer';

// Default state
export const defaultState: SlidesContextState = {
  error: null,
  status: {
    isFetching: false,
    isLoading: true,
    isPlaying: false,
  },
  deck: {
    currIndex: 0,
    prev: null,
    curr: null,
    next: null,
  },
};

// Slides Context
const SlidesContext = createContext<SlidesContextValue | undefined>(undefined);

// Slides Provider
export const SlidesProvider: FC<{ children: Node }> = ({ children }) => {
  const [state, dispatch] = useReducer<
    Reducer<SlidesContextState, SlidesAction>
  >(slidesReducer, defaultState);

  return (
    <SlidesContext.Provider value={{ state, dispatch }}>
      {children}
    </SlidesContext.Provider>
  );
};

export default SlidesContext;
