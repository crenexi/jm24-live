import { useEffect, useRef } from 'react';
import logger from '@services/logger';

type UseSliderval = (params: {
  callback: () => void;
  interval: number | null;
  onError: (err?: Error) => void;
}) => void;

const useSliderval: UseSliderval = (params) => {
  const { callback, interval, onError } = params;
  const savedCallback = useRef<() => void>();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    logger.log(`Interval: ${String(interval)}`);
    if (interval === null) return;

    function tick() {
      if (savedCallback.current) {
        try {
          savedCallback.current?.();
        } catch (err) {
          logger.log(`Error in useSliderval: ${err.message}`);
          onError(err);
        }
      }
    }

    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval, onError]);
};

export default useSliderval;
