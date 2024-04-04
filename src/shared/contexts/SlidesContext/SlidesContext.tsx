import { ReactNode as Node, FC, Reducer, useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { setLoadingAction, setSlidesAction, setErrorAction } from './actions';
import { ContextState, ContextValue, Action, Album } from '@stypes/Slide.types'; // prettier-ignore
import logger from '@services/logger';
import slidesReducer from './slides-reducer';
import fakeSlides from './fake-slides';

const defaultDeck = {
  total: 0,
  currIndex: 0,
  prev: null,
  curr: null,
  next: null,
};

export const defaultState: ContextState = {
  status: {
    error: null,
    isFetching: false,
    isLoading: true,
  },
  slides: {
    [Album.STANDARDS]: [],
    [Album.VERTICALS]: [],
    [Album.FEATURES]: [],
  },
  decks: {
    [Album.STANDARDS]: { ...defaultDeck },
    [Album.VERTICALS]: { ...defaultDeck },
    [Album.FEATURES]: { ...defaultDeck },
  },
};

// Slides Context
const SlidesContext = createContext<ContextValue | undefined>(undefined);

// Slides Provider
export const SlidesProvider: FC<{ children: Node }> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<ContextState, Action>>(
    slidesReducer,
    defaultState,
  );

  useEffect(() => {
    const albums = [Album.STANDARDS, Album.VERTICALS, Album.FEATURES];
    dispatch(setLoadingAction(true));

    const fetchSlides = async (album: Album) => {
      // Simulate fetching slides asynchronously
      const slides = await fakeSlides.get();
      dispatch(setSlidesAction({ album, slides }));
    };

    const fetchAllSlides = albums.map((album) => fetchSlides(album));

    // Fetch all albums and set loading/error accordingly
    Promise.all(fetchAllSlides)
      .then(() => {
        dispatch(setLoadingAction(false));
      })
      .catch((err) => {
        logger.error(err);
        dispatch(setErrorAction(`Failed to fetch slides.`));
        dispatch(setLoadingAction(false));
      });
  }, []);

  return (
    <SlidesContext.Provider value={{ state, dispatch }}>
      {children}
    </SlidesContext.Provider>
  );
};

export default SlidesContext;
