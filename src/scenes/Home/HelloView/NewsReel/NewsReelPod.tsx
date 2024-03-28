import { FC, useState, useEffect } from 'react';
import { Story } from '@stypes/News.types';
import { Loading } from '@components/feedback';
import useContentful from '@hooks/use-contentful';
import NewsReel from './NewsReel';

const NewsReelPod: FC = () => {
  const [story, setStory] = useState<Story | null>(null);
  const { data, isLoading, error } = useContentful<Story>('jm24/news');

  useEffect(() => {
    if (!data || data.length < 1) {
      setStory(null);
    } else {
      console.log(data);
      const ranIndex = Math.floor(Math.random() * data.length);
      setStory(data[ranIndex]);
    }
  }, [data, isLoading, error]);

  if (error) return <div>error.message</div>;
  if (isLoading) return <Loading />;
  if (!data || data.length < 1) return <div>No story</div>;

  return <NewsReel story={story} />;
};

export default NewsReelPod;
