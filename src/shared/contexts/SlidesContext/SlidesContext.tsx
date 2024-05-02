import { ReactNode as Node, FC, Reducer, useEffect, useMemo } from 'react'; // prettier-ignore
import { createContext, useReducer } from 'react';
import isEqual from 'lodash.isequal';
import { ContextState, ContextValue, Action, Album } from '@stypes/Slide.types'; // prettier-ignore
import usePhotos from '@hooks/use-photos';
import {
  setStatusAction,
  setFetchingAction,
  setLoadingAction,
  setSlidesAction,
} from './actions';
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
    isFetching: true,
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
  const albums = useMemo(
    () => [Album.STANDARDS, Album.VERTICALS, Album.FEATURES],
    [],
  );

  const [state, dispatch] = useReducer<Reducer<ContextState, Action>>(
    slidesReducer,
    defaultState,
  );

  const photoAlbums = usePhotos(albums);

  useEffect(() => {
    const isFetching = photoAlbums.some(({ isFetching }) => isFetching);
    const allDone = photoAlbums.every(({ isFetching }) => !isFetching);

    // Check if queries have errors
    const errors = photoAlbums
      .filter(({ error }) => error)
      .map(({ error }, i) => ({
        album: albums[i],
        errMessage: error?.message || 'Unknown error',
      }));

    // Fetching state
    if (state.status.isFetching !== isFetching) {
      dispatch(setFetchingAction(isFetching));
    }

    // Error state
    if (errors.length > 0) {
      const errMessage = errors
        .map((e) => `Error fetching data for ${e.album}: ${e.errMessage}`)
        .join(', ');

      dispatch(
        setStatusAction({
          isFetching,
          isLoading: false,
          error: { message: errMessage },
        }),
      );
    } else if (allDone) {
      // SLides state
      photoAlbums.forEach(({ data }, i) => {
        if (data && !isEqual(state.slides[albums[i]], data)) {
          dispatch(setSlidesAction({ album: albums[i], slides: data }));
        }
      });

      // Complete initial loading
      if (state.status.isLoading) {
        dispatch(setLoadingAction(false));
      }
    }
  }, [
    albums,
    photoAlbums,
    state.slides,
    state.status.isFetching,
    state.status.isLoading,
  ]);

  return (
    <SlidesContext.Provider value={{ state, dispatch }}>
      {children}
    </SlidesContext.Provider>
  );
};

export default SlidesContext;
