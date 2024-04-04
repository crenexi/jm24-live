import { ActionTypes } from './actions';
import { Action, ContextState, Slide, Deck, Album } from '@stypes/Slide.types'; // prettier-ignore
import { defaultState } from './SlidesContext';

type SlidesReducer = (state: ContextState, action: Action) => ContextState;

// Reducer
const slidesReducer: SlidesReducer = (state, action) => {
  // Helper: update deck state based on index
  const deckByIndex = (slides: Slide[], i: number): Deck => {
    const total = slides.length;
    return {
      total,
      currIndex: i,
      prev: slides[(i - 1 + total) % total],
      curr: slides[i],
      next: slides[(i + 1) % total],
    };
  };

  // Helper: set slides
  const stateWithNewSlides = (album: Album, slides: Slide[]): ContextState => ({
    ...state,
    slides: { ...state.slides, [album]: slides },
    status: { ...state.status, isFetching: false },
    decks: { ...state.decks, [album]: deckByIndex(slides, 0) },
  });

  // Actions
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
      return stateWithNewSlides(album, slides);
    }
    // To next slide
    case ActionTypes.TO_NEXT: {
      const { album } = action.payload;
      const currIndex = state.decks[album].currIndex;
      const total = state.slides[album].length;
      const i = (currIndex + 1) % total;

      return {
        ...state,
        decks: {
          ...state.decks,
          [album]: deckByIndex(state.slides[album], i),
        },
      };
    }
    // To previous slide
    case ActionTypes.TO_PREV: {
      const { album } = action.payload;
      const currIndex = state.decks[album].currIndex;
      const total = state.slides[album].length;
      const i = (currIndex - 1 + total) % total;

      return {
        ...state,
        decks: {
          ...state.decks,
          [album]: deckByIndex(state.slides[album], i),
        },
      };
    }
    // Restart to defaults
    case ActionTypes.RESTART:
      return { ...defaultState };
    default:
      return state;
  }
};

export default slidesReducer;
