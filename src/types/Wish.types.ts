import { ItemMeta } from '@hooks/use-contentful';

export type NewWish = {
  sender: string;
  message: string;
};

export type Wish = NewWish & ItemMeta;

export type FeedWish = Wish & {
  nameKey: string;
  relativeTime: string;
};
