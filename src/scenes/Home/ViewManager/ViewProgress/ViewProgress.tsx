import { FC, useState, useEffect } from 'react';
import { View } from '@stypes/View.types';
import appSettings from '@config/app-settings';
import sy from './ViewProgress.scss';

type ViewProgressProps = {
  view: View;
};

const ViewProgress: FC<ViewProgressProps> = ({ view }) => {
  const TEN_SEC = 10_000;
  const totalDuration = appSettings.views[view].interval;
  const incrementAmount = 100 / (totalDuration / TEN_SEC);

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
    }, TEN_SEC);

    return () => clearInterval(interval);
  }, [view, incrementAmount]);

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
