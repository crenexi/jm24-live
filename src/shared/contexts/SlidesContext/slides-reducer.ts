import { ActionTypes } from './actions';
import { SlidesAction, SlidesContextState, Slide } from '@stypes/Slide.types';
import { defaultState } from './SlidesContext';

type SlidesReducer = (
  state: SlidesContextState,
  action: SlidesAction,
) => SlidesContextState;

// Helper: update deck state based on index
const updateDeck = (state: SlidesContextState, i: number) => {
  const total = state.slides.length;
  return {
    ...state.deck,
    currIndex: i,
    prev: state.slides[(i - 1 + total) % total],
    curr: state.slides[i],
    next: state.slides[(i + 1) % total],
  };
};

// Helper: set slides
const updateSlides = (state: SlidesContextState, slides: Slide[]) => ({
  ...state,
  slides,
  status: {
    ...state.status,
    isFetching: false,
  },
  deck: {
    ...state.deck,
    currIndex: 0,
    total: slides.length,
    prev: slides[slides.length - 1] || null,
    curr: slides[0] || null,
    next: slides[1] || null,
  },
});

// Reducer
const slidesReducer: SlidesReducer = (state, action) => {
  const total = state.slides.length;

  switch (action.type) {
    // To next slide
    case ActionTypes.TO_NEXT: {
      const i = (state.deck.currIndex + 1) % total;
      return { ...state, deck: updateDeck(state, i) };
    }
    // To previous slide
    case ActionTypes.TO_PREV: {
      const i = (state.deck.currIndex - 1 + total) % total;
      return { ...state, deck: updateDeck(state, i) };
    }
    // To specified slide
    case ActionTypes.TO_SLIDE:
      return { ...state, deck: updateDeck(state, action.payload) };
    case ActionTypes.SET_MODE:
      return {
        ...state,
        status: {
          ...state.status,
          isPlaying: action.payload === 'play',
        },
      };
    // Set slides data
    case ActionTypes.SET_SLIDES:
      const slides = action.payload;
      return updateSlides(state, slides);
    // Set loading status
    case ActionTypes.SET_LOADING:
      return {
        ...state,
        status: {
          ...state.status,
          isLoading: action.payload,
        },
      };
    // Set error message
    case ActionTypes.SET_ERROR:
      return {
        ...state,
        error: {
          message: action.payload,
        },
      };
    // Restart to defaults
    case ActionTypes.RESTART:
      return {
        ...defaultState,
        slides: state.slides,
      };
    default:
      return state;
  }
};

export default slidesReducer;
