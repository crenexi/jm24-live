import { View } from '@stypes/View.types';
import { Album } from '@stypes/Slide.types';

export type LogLevel = 'warn' | 'info' | 'debug';

type ViewConfig = { interval: number };
type ViewsConfig = Record<View, ViewConfig>;

type AlbumConfig = { interval: number };
type AlbumsConfig = Record<Album, AlbumConfig>;

type AppSettings = {
  theme: 'light' | 'dark';
  language: string;
  logLevel: LogLevel;
  debug: boolean;
  views: ViewsConfig;
  albums: AlbumsConfig;
};

export default AppSettings;
