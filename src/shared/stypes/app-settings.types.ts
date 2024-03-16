export type LogLevel = 'warn' | 'info' | 'debug';

type AppSettings = {
  theme: 'light' | 'dark';
  language: string;
  logLevel: LogLevel;
  splashDuration: number;
  debug: boolean;
};

export default AppSettings;
