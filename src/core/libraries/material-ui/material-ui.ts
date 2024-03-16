import { createTheme, responsiveFontSizes, Theme } from '@mui/material/styles';
import { breakpoints } from '@config/app-theme';
import createPalette from './create-palette';
import createTypography from './create-typography';

type MaterialUI = { createTheme: () => Theme };

const create = (): Theme => {
  const palette = createPalette();
  const typography = createTypography();

  const components = {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  };

  const theme = createTheme({
    palette,
    typography,
    breakpoints,
    components,
  });

  // Create responsive theme
  return responsiveFontSizes(theme, {
    // Note: breakpoints.values is an object of values
    breakpoints: Object.values(breakpoints.values),
  });
};

const materialUI: MaterialUI = {
  createTheme: create,
};

export default materialUI;
