import { FC, useState, useEffect } from 'react';
import { Views } from '@stypes/View.types';
import { viewDurations } from '@contexts/ViewsContext';
import sy from './ViewProgress.scss';

type ViewProgressProps = {
  view: string;
};

const ViewProgress: FC<ViewProgressProps> = ({ view }) => {
  const totalDuration = viewDurations[view as Views] / 1000;
  const incrementAmount = 100 / (totalDuration / 10);

  const [key, setKey] = useState(0);
  const [barPercent, setBarPercent] = useState(0);

  // Update bar width percentage
  useEffect(() => {
    const interval = setInterval(() => {
      setBarPercent((prevPercent) => {
        // Update by 10 every 10 seconds
        const newPercent = prevPercent + incrementAmount;
        return newPercent > 100 ? 100 : newPercent;
      });
    }, 10_000);

    return () => clearInterval(interval);
  }, []);

  // Reset on view change
  useEffect(() => {
    setBarPercent(0);
    setKey((prevKey) => prevKey + 1);
  }, [view]);

  const sxBar = {
    width: `${barPercent}%`,
  };

  return (
    <div className={sy.edge} key={key}>
      <div className={sy.bar} style={sxBar} />
    </div>
  );
};

export default ViewProgress;
