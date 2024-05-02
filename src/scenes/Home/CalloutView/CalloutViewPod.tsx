import { FC, useState, useEffect } from 'react';
import { Callout } from '@stypes/Callout.types';
import { LoadingBlock } from '@components/feedback';
import { ErrorText } from '@components/display';
import useContentful from '@hooks/use-contentful';
import useLocalStorage from '@hooks/use-local-storage';
import CalloutView from './CalloutView';

const CalloutViewPod: FC = () => {
  const [index, setIndex] = useLocalStorage<number>('jm24_calloutIndex', 0);
  const { data, isLoading, error } = useContentful<Callout>('jm24/callouts');
  const [callout, setCallout] = useState<Callout | null>(null);
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    if (data && data.length > 0 && !isSetup) {
      const safeIndex = index % data.length;

      // Set story and setup
      setCallout(data[safeIndex]);
      setIsSetup(true);

      // Prepare index for next story immediately
      const nextIndex = (safeIndex + 1) % data.length;
      setIndex(nextIndex);
    }
  }, [data, index, isSetup, setIndex]);

  // Error and loading state
  if (error) return <ErrorText>{error.message}</ErrorText>;
  if (isLoading) return <LoadingBlock />;

  // No data
  if (!data || data.length < 1) return <div>No callout</div>;

  return <CalloutView callout={callout} />;
};

export default CalloutViewPod;
