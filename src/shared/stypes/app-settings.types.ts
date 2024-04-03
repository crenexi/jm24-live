export type LogLevel = 'warn' | 'info' | 'debug';

type AppSettings = {
  theme: 'light' | 'dark';
  language: string;
  logLevel: LogLevel;
  debug: boolean;
};

export default AppSettings;
