import { svar } from '@helpers/index';
import Palette from './types/palette.types';

const createPalette = (): Palette => ({
  type: 'light',
  common: {
    black: svar('co_content'),
    white: '#fff',
  },
  text: {
    primary: svar('co_content'),
    secondary: svar('co_content_subtle'),
    disabled: svar('co_content_subtle'),
    hint: svar('co_content_subtle'),
  },
  background: {
    default: svar('co_background_lighter'),
    paper: '#fff',
  },
  primary: {
    main: svar('co_primary'),
    light: svar('co_primary_lighter'),
    dark: svar('co_primary_darker'),
    contrastText: '#fff',
  },
  secondary: {
    main: svar('co_bright'),
    light: svar('co_bright_lighter'),
    dark: svar('co_bright_darker'),
    contrastText: '#fff',
  },
  error: {
    main: svar('co_danger'),
    light: svar('co_danger_lighter'),
    dark: svar('co_danger_darker'),
    contrastText: '#fff',
  },
  warning: {
    main: svar('co_warn'),
    light: svar('co_warn_lighter'),
    dark: svar('co_warn_darker'),
    contrastText: '#fff',
  },
  success: {
    main: svar('co_success'),
    light: svar('co_success_lighter'),
    dark: svar('co_success_darker'),
    contrastText: '#000',
  },
  info: {
    main: svar('co_info'),
    light: svar('co_info_lighter'),
    dark: svar('co_info_darker'),
    contrastText: '#fff',
  },
});

export default createPalette;
