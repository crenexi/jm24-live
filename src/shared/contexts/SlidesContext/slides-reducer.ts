import logger from '@services/logger';
import { ActionTypes } from './actions';
import { SlidesAction, SlidesContextState } from './types';

type SlidesReducer = (
  state: SlidesContextState,
  action: SlidesAction,
) => SlidesContextState;

const slidesReducer: SlidesReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.TO_NEXT:
      logger.log('Slides: To Next');
      return state;
    case ActionTypes.TO_PREV:
      logger.log('Slides: To Prev');
      return state;
    case ActionTypes.TO_SLIDE:
      logger.log('Slides: To Slide');
      return state;
    case ActionTypes.SET_MODE:
      logger.log('Slides: Set Mode');
      return state;
    case ActionTypes.SET_ERROR:
      logger.log('Slides: Set Error');
      return state;
    case ActionTypes.RESTART:
      logger.log('Slides: Restart');
      return state;
    default:
      return state;
  }
};

export default slidesReducer;
