import { FC, useState, useEffect } from 'react';
import { Callout } from '@stypes/Callout.types';
import { LoadingBlock } from '@components/feedback';
import useContentful from '@hooks/use-contentful';
import useLocalStorage from '@hooks/use-local-storage';
import CalloutView from './CalloutView';

const CalloutViewPod: FC = () => {
  const [index, setIndex] = useLocalStorage<number>('jm24_calloutIndex', 0);
  const { data, isLoading, error } = useContentful<Callout>('jm24/callouts');
  const [callout, setCallout] = useState<Callout | null>(null);

  useEffect(() => {
    // If data is loaded and exists
    if (data && data.length > 0) {
      // Ensure index is within bounds
      const safeIndex = index % data.length;
      if (safeIndex !== index) setIndex(safeIndex);

      // Set the current callout
      setCallout(data[safeIndex]);

      // Prepare the index for the next callout
      const nextIndex = (safeIndex + 1) % data.length;
      setIndex(nextIndex);
    }
  }, [data, index, setIndex]);

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <LoadingBlock />;
  if (!data || data.length < 1) return <div>No callout</div>;

  return <CalloutView callout={callout} />;
};

export default CalloutViewPod;
