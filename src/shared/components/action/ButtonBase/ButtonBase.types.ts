import { ReactNode, MouseEvent, CSSProperties } from 'react';
import { To } from '@stypes/general.types';
import { ButtonClasses } from '@mui/material/Button';

// ## Our Button options

export type ButtonMode = 'action' | 'link' | 'navLink' | 'a' | 'mock';
export type ButtonClick = (ev: MouseEvent<HTMLButtonElement>) => void;

export type SxNavLink = (opts: {
  isActive: boolean;
}) => CSSProperties | undefined;

export interface ButtonBaseProps {
  children?: ReactNode;
  mode?: ButtonMode;
  href?: string;
  target?: string;
  rel?: string;
  to?: To;
  startIcon?: string;
  endIcon?: string;
  disabled?: boolean;
  download?: boolean;
  unfocus?: boolean;
  onlyIcon?: boolean;
  classes?: Partial<ButtonClasses>;
  sx?: CSSProperties;
  sxActive?: CSSProperties;
  click?: ButtonClick;
}

// Styled MUI button options

export interface SxButtonProps {
  disabled?: boolean;
  download?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  classes?: Partial<ButtonClasses>;
  onClick?: ButtonClick;
}
