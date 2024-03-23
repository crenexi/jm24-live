import { ReactNode as Node, FC, Reducer, useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { setLoadingAction, setSlidesAction, setErrorAction } from './actions';
import {
  SlidesContextState,
  SlidesContextValue,
  SlidesAction,
} from '@stypes/Slide.types';
import slidesReducer from './slides-reducer';
import fakeSlides from './fake-slides';

// Default state
export const defaultState: SlidesContextState = {
  slides: [],
  error: null,
  status: {
    isFetching: true,
    isLoading: true,
    isPlaying: false,
  },
  deck: {
    total: 0,
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

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        dispatch(setLoadingAction(true));

        // Simulate fetching slides asynchronously
        const slides = await fakeSlides.get();
        dispatch(setSlidesAction(slides));
      } catch (error) {
        dispatch(setErrorAction('Failed to fetch slides.'));
      } finally {
        dispatch(setLoadingAction(false));
      }
    };

    fetchSlides();
  }, []);

  return (
    <SlidesContext.Provider value={{ state, dispatch }}>
      {children}
    </SlidesContext.Provider>
  );
};

export default SlidesContext;
