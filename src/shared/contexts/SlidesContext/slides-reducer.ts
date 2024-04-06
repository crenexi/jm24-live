import { ActionTypes } from './actions';
import { Album } from '@stypes/Slide.types';
import { Action, ContextState } from '@stypes/Slide.types';
import { deckByIndex, albumGroupSize } from './helpers';
import { defaultState } from './SlidesContext';

type SlidesReducer = (state: ContextState, action: Action) => ContextState;

// Reducer
const slidesReducer: SlidesReducer = (state, action) => {
  switch (action.type) {
    // Set error message
    case ActionTypes.SET_ERROR: {
      return {
        ...state,
        status: {
          ...state.status,
          error: {
            message: action.payload,
          },
        },
      };
    }
    // Set fetching status
    case ActionTypes.SET_FETCHING: {
      return {
        ...state,
        status: {
          ...state.status,
          isFetching: action.payload,
        },
      };
    }
    // Set loading status
    case ActionTypes.SET_LOADING: {
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: action.payload,
        },
      };
    }
    // Set slides data
    case ActionTypes.SET_SLIDES: {
      const { album, slides } = action.payload;
      const groupSize = albumGroupSize(album);
      const deck = deckByIndex({ slides, groupSize, groupIndex: 0 });

      return {
        ...state,
        slides: { ...state.slides, [album]: slides },
        status: { ...state.status, isFetching: false },
        decks: { ...state.decks, [album]: deck },
      };
    }
    // To next slide
    case ActionTypes.TO_NEXT: {
      const { album } = action.payload;
      const slides = state.slides[album];
      const groupCount = state.decks[album].groupCount;
      const groupIndex = state.decks[album].groupIndex;
      const i = (groupIndex + 1) % groupCount;

      const groupSize = albumGroupSize(album);
      const deck = deckByIndex({ slides, groupSize, groupIndex: i });

      return {
        ...state,
        decks: { ...state.decks, [album]: deck },
      };
    }
    // To previous slide
    case ActionTypes.TO_PREV: {
      const { album } = action.payload;
      const slides = state.slides[album];
      const groupCount = state.decks[album].groupCount;
      const groupIndex = state.decks[album].groupIndex;
      const i = (groupIndex - 1 + groupCount) % groupCount;

      const groupSize = albumGroupSize(album);
      const deck = deckByIndex({ slides, groupSize, groupIndex: i });

      return {
        ...state,
        decks: { ...state.decks, [album]: deck },
      };
    }
    // Restart to defaults
    case ActionTypes.RESTART:
      const { STANDARDS, VERTICALS, FEATURES } = Album;

      return {
        ...defaultState,
        status: {
          ...defaultState.status,
          isLoading: false,
        },
        slides: { ...state.slides },
        decks: {
          [STANDARDS]: deckByIndex({
            slides: state.slides[STANDARDS],
            groupSize: albumGroupSize(STANDARDS),
            groupIndex: 0,
          }),
          [VERTICALS]: deckByIndex({
            slides: state.slides[VERTICALS],
            groupSize: albumGroupSize(VERTICALS),
            groupIndex: 0,
          }),
          [FEATURES]: deckByIndex({
            slides: state.slides[FEATURES],
            groupSize: albumGroupSize(FEATURES),
            groupIndex: 0,
          }),
        },
      };
    default:
      return state;
  }
};

export default slidesReducer;
