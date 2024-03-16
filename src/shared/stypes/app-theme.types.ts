export type Breakpoints = {
  keys: string[];
  values: {
    [key: string]: number;
  };
};

export type PaletteRows = {
  title: string;
  colors: [string, string][];
}[];

export type IconRows = {
  title: string;
  icons: [string, string][];
}[];
