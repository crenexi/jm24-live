import { ReactNode, CSSProperties } from 'react';
import { TextPreset, TextSize } from '@stypes/general.types';

export type TextProps = {
  children: ReactNode;
  preset?: TextPreset;
  size?: TextSize;
  color?: string;
  inline?: boolean;
  truncate?: boolean;
  className?: string;
  sx?: CSSProperties;
};

export const textDefaults: Partial<TextProps> = {
  preset: 'body',
  size: 'md',
  color: '',
  inline: false,
  truncate: false,
  className: '',
  sx: {},
};
