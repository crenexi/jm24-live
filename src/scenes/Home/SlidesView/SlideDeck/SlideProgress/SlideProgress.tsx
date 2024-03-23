import { FC, useState, useEffect } from 'react';
import appSettings from '@config/app-settings';
import sy from './SlideProgress.scss';
import classNames from 'classnames';

type SlideProgressProps = {
  currIndex: number;
};

const SlideProgress: FC<SlideProgressProps> = ({ currIndex }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Reset state
    setAnimate(false);

    // Brief delay ensures CSS re-applies animation
    setTimeout(() => setAnimate(true), 10);
  }, [currIndex]);

  const cnBar = classNames(sy.bar, { [sy.bar__animate]: animate });

  const sxBar = {
    animationDuration: `${appSettings.slideDuration}ms`,
  };

  return (
    <div className={sy.edge}>
      <div className={cnBar} style={sxBar} />
    </div>
  );
};

export default SlideProgress;
