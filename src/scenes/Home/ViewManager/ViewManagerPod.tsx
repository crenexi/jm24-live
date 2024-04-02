import { FC, useState, useEffect } from 'react';

// import logger from '@services/logger';
import useQueryParam from '@hooks/use-query-param';
import ViewManager from './ViewManager';

export enum Views {
  HELLO = 'hello',
  WISHES = 'wishes',
  CALLOUT = 'callout',
  STANDARDS = 'standards',
  VERTICALS = 'verticals',
  FEATURES = 'features',
}

export const viewDurations = {
  [Views.HELLO]: 10_000, // TODO: set to 55 seconds
  [Views.STANDARDS]: 10_000, // TODO: set to 90 seconds (30-sec swaps)
  [Views.WISHES]: 10_000, // TODO: set to 65 seconds
  [Views.VERTICALS]: 10_000, // TODO: set to 90 seconds (30-sec swaps)
  [Views.CALLOUT]: 10_000, // TODO: set to 45 seconds
  [Views.FEATURES]: 10_000, // TODO: set to 75 seconds
};

const ViewManagerPod: FC = () => {
  // Get view from param and validate its type
  const [viewParam, setViewParam] = useQueryParam('view');
  const view = viewFromParam(viewParam);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Play cycle
  useEffect(() => {
    // Cycle paused
    if (!isPlaying) return;

    // Cucle playing
    const timeout = setTimeout(() => {
      setViewParam(getNextView(view));
    }, viewDurations[view]);

    // Cleanup
    return () => clearTimeout(timeout);
  }, [view, setViewParam, isPlaying]);

  // Cycling toggle
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <ViewManager view={view} isPlaying={isPlaying} togglePlay={togglePlay} />
  );
};

// Helper: get View from param string
function viewFromParam(param: string | null): Views {
  if (param && Object.values(Views).includes(param as Views)) {
    return param as Views;
  }

  // Default view
  return Views.HELLO;
}

// Helper: get the next view
function getNextView(currView: Views): Views {
  const viewVals = Object.values(Views) as string[];
  const currIndex = viewVals.indexOf(currView);
  const nextIndex = (currIndex + 1) % viewVals.length;
  return viewVals[nextIndex] as Views;
}

export default ViewManagerPod;
