import { FC, useState, useEffect } from 'react';
import { Story } from '@stypes/News.types';
import { ErrorText } from '@components/display';
import { Loading } from '@components/feedback';
import useContentful from '@hooks/use-contentful';
import useLocalStorage from '@hooks/use-local-storage';
import NewsReel from './NewsReel';

const NewsReelPod: FC = () => {
  const [index, setIndex] = useLocalStorage<number>('jm24_newsIndex', 0);
  const { data, isLoading, error } = useContentful<Story>('jm24/news');
  const [story, setStory] = useState<Story | null>(null);
  const [isSetup, setIsSetup] = useState(false);

  useEffect(() => {
    if (data && data.length > 0 && !isSetup) {
      const safeIndex = index % data.length;

      // Set story and setup
      setStory(data[safeIndex]);
      setIsSetup(true);

      // Prepare index for next story immediately
      const nextIndex = (safeIndex + 1) % data.length;
      setIndex(nextIndex);
    }
  }, [data, index, isSetup, setIndex]);

  if (error) return <ErrorText>{error.message}</ErrorText>;
  if (isLoading) return <Loading />;
  if (!data || data.length < 1) return <div>No story available</div>;

  return <NewsReel story={story} />;
};

export default NewsReelPod;
