import { ItemMeta } from '@hooks/use-contentful';

export type StoryImage = {
  id: string;
  alt: string;
  url: string;
};

export type NewStory = {
  isBreaking: boolean;
  headline: string;
  subtext: string;
  images: StoryImage[];
};

export type Story = NewStory & ItemMeta;
