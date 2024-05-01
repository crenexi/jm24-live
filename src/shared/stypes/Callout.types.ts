import { ItemMeta } from '@hooks/use-contentful';

export type CalloutImg = {
  alt: string;
  url: string;
};

export type NewCallout = {
  name: string;
  subtext: string;
  isLocation: boolean;
  imgMain: CalloutImg;
  imgLeft: CalloutImg;
  imgRight: CalloutImg;
};

export type Callout = NewCallout & ItemMeta;
