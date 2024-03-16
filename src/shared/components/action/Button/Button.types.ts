import { ReactNode } from 'react';
import { ButtonSize, ButtonVariant } from '@stypes/general.types';
import { ButtonBaseProps } from '../ButtonBase';

export interface ButtonProps extends ButtonBaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}
