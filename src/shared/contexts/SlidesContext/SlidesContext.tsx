import { ReactNode as Node, FC, Reducer, useEffect } from 'react';
import { createContext, useReducer } from 'react';
import { ContextState, ContextValue, Action, Album } from '@stypes/Slide.types'; // prettier-ignore
import logger from '@services/logger';
import useAlbumQueries from '@hooks/use-album-queries';
import { setLoadingAction, setSlidesAction, setErrorAction } from './actions';
import slidesReducer from './slides-reducer';

const defaultDeck = {
  groupCount: 0,
  groupIndex: 0,
  groupPrev: [],
  groupCurr: [],
  groupNext: [],
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
  const albums = [Album.STANDARDS, Album.VERTICALS, Album.FEATURES];

  const [state, dispatch] = useReducer<Reducer<ContextState, Action>>(
    slidesReducer,
    defaultState,
  );

  // prettier-ignore
  const { queries, isLoading, isSuccess, isError, errMessage } = useAlbumQueries(albums);

  useEffect(() => {
    // Indicate data is being fetched
    dispatch(setLoadingAction(isLoading));

    if (isSuccess) {
      // Set slides data for each album
      albums.forEach((album, index) => {
        const slides = queries[index].data || [];
        dispatch(setSlidesAction({ album, slides }));
      });

      // Stop loading after success
      dispatch(setLoadingAction(false));
    }

    if (isError) {
      dispatch(setErrorAction(errMessage));
      dispatch(setLoadingAction(false));
    }
  }, [isLoading, isSuccess, isError, errMessage]);

  return (
    <SlidesContext.Provider value={{ state, dispatch }}>
      {children}
    </SlidesContext.Provider>
  );
};

export default SlidesContext;
