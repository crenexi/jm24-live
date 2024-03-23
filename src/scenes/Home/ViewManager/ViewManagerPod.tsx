import { FC, useState, useEffect } from 'react';

// import logger from '@services/logger';
import useQueryParam from '@hooks/use-query-param';
import ViewManager from './ViewManager';

export enum Views {
  HELLO = 'hello',
  WISHES = 'wishes',
  SLIDES = 'slides',
}

const viewDurations = {
  [Views.HELLO]: 10_000,
  [Views.WISHES]: 10_000,
  [Views.SLIDES]: 10_000,
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
