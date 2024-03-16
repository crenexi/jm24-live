import { CSSProperties } from 'react';
import svars from '@sutils/exports.scss';

const { colorContentBase } = svars;

// Default styles
const button: CSSProperties = {
  textTransform: 'capitalize',
  lineHeight: '1.2em',
  color: colorContentBase,
  transitionDuration: '100ms',
};

// Default styles
const iconButton: CSSProperties = {
  color: colorContentBase,
  transitionDuration: '100ms',
};

export default {
  button,
  iconButton,
};
