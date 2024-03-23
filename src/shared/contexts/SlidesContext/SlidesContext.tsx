import { ReactNode as Node, FC, Reducer } from 'react';
import { createContext, useReducer } from 'react';
import {
  SlidesContextState,
  SlidesContextValue,
  SlidesAction,
  Slide,
} from '@stypes/Slide.types';
import slidesReducer from './slides-reducer';

// prettier-ignore
const fakeSlides: Slide[] = [
  {
    id: '1234',
    url: 'https://stage-live.jm2024.com/assets/test.jpg',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
    creationTime: '2024-12-31T00:00:00',
    width: '1920',
    height: '1080',
  },
  {
    id: '2345',
    url: 'https://stage-live.jm2024.com/assets/test.jpg',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    creationTime: '2024-12-30T00:00:00',
    width: '1920',
    height: '1080',
  },
  {
    id: '3456',
    url: 'https://stage-live.jm2024.com/assets/test.jpg',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
    creationTime: '2024-12-29T00:00:00',
    width: '1920',
    height: '1080',
  }
];

// Default state
export const defaultState: SlidesContextState = {
  slides: fakeSlides,
  error: null,
  status: {
    isFetching: false,
    isLoading: true,
    isPlaying: false,
  },
  deck: {
    currIndex: 0,
    prev: fakeSlides[0],
    curr: fakeSlides[1],
    next: fakeSlides[2],
    total: fakeSlides.length,
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
