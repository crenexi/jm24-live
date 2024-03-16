declare module '@mui/system' {
  interface BreakpointOverrides {
    // Our breakpoints
    m1: true;
    m2: true;
    m3: true;
    d1: true;
    d2: true;
    d3: true;

    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }

  interface Theme {
    breakpoints: {
      up: (key: string) => string;
      only: (key: string) => string;
    };
  }
}
