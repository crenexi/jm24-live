import { FC, useState, useEffect } from 'react';
import { viewDurations, Views } from '../ViewManagerPod';
import sy from './ViewProgress.scss';

type ViewProgressProps = {
  view: string;
};

const ViewProgress: FC<ViewProgressProps> = ({ view }) => {
  const [key, setKey] = useState(0);

  // Remount to restart animation
  useEffect(() => setKey((prevKey) => prevKey + 1), [view]);

  const duration = viewDurations[view as Views];
  const sxBar = {
    animationDuration: `${duration}ms`,
  };

  return (
    <div className={sy.edge}>
      <div key={key} className={sy.bar} style={sxBar} />
    </div>
  );
};

export default ViewProgress;
