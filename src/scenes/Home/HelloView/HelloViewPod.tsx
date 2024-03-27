import { FC, useState, useEffect } from 'react';
import useDataStatic from '@hooks/use-data-static';
import useContentful from '@hooks/use-contentful';
import { Story } from '@stypes/News.types';
import HelloView from './HelloView';

export type News = {
  error: { message: string } | null;
  isLoading: boolean;
  story: Story | null;
};

const HelloViewPod: FC = () => {
  const dStatic = useDataStatic();
  const urlLogo = dStatic.urlLogoGIF;

  const initialNews: News = {
    error: null,
    isLoading: true,
    story: null,
  };

  // News stories
  const [news, setNews] = useState<News | null>(initialNews);
  const { data, isLoading, error } = useContentful<Story>('jm24/news');

  // Runs once on component mount
  useEffect(() => {
    if (error) {
      setNews({ isLoading: false, error: error, story: null });
    } else if (isLoading) {
      setNews({ isLoading: true, error: null, story: null });
    } else if (data && data.length > 0) {
      const ranIndex = Math.floor(Math.random() * data.length);
      setNews({ isLoading: false, error: null, story: data[ranIndex] });
    }
  }, [data, isLoading, error]);

  return <HelloView urlLogo={urlLogo} news={news} />;
};

export default HelloViewPod;
