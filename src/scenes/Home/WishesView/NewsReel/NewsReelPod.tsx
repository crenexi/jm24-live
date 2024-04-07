import { FC, useState, useEffect } from 'react';
import { Story } from '@stypes/News.types';
import { Loading } from '@components/feedback';
import useContentful from '@hooks/use-contentful';
import useLocalStorage from '@hooks/use-local-storage';
import NewsReel from './NewsReel';

const NewsReelPod: FC = () => {
  const [index, setIndex] = useLocalStorage<number>('jm24_newsIndex', 0);
  const { data, isLoading, error } = useContentful<Story>('jm24/news');
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    // If data is loaded and exists
    if (data && data.length > 0) {
      // Ensure index is within bounds
      const safeIndex = index % data.length;
      if (safeIndex !== index) setIndex(safeIndex);

      // Set the current callout
      setStory(data[safeIndex]);

      // Prepare the index for the next callout
      const nextIndex = (safeIndex + 1) % data.length;
      setIndex(nextIndex);
    }
  }, [data, index, setIndex]);

  if (error) return <div>{error.message}k</div>;
  if (isLoading) return <Loading />;
  if (!data || data.length < 1) return <div>No story</div>;

  return <NewsReel story={story} />;
};

export default NewsReelPod;
