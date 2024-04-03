import { FC, useState, useEffect } from 'react';
import sy from './SlideProgress.scss';

type SlideProgressProps = {
  currIndex: number;
  duration: number;
};

const SlideProgress: FC<SlideProgressProps> = ({ currIndex, duration }) => {
  const [key, setKey] = useState(0);

  // Remount to restart animation
  useEffect(() => setKey((prevKey) => prevKey + 1), [currIndex]);

  const sxBar = {
    animationDuration: `${duration}ms`,
  };

  return (
    <div className={sy.edge}>
      <div key={key} className={sy.bar} style={sxBar} />
    </div>
  );
};

export default SlideProgress;
