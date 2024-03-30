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

  // Set the initial story
  useEffect(() => {
    if (data && data.length > 0) {
      setStory(data[index]);
    }
  }, [index]);

  // Update index after component mounts or updates
  useEffect(() => {
    if (data && data.length > 0) {
      // Calculate the next index only when data changes
      const nextIndex = (index + 1) % data.length;
      setIndex(nextIndex);
    }
  }, [data]);

  if (error) return <div>error.message</div>;
  if (isLoading) return <Loading />;
  if (!data || data.length < 1) return <div>No story</div>;

  return <NewsReel story={story} />;
};

export default NewsReelPod;
