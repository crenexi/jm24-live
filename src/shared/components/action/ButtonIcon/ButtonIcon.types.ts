import { ButtonBaseProps } from '../ButtonBase';
import { IconPrefix } from '../../legos/Icon/Icon';

type ButtonSize = 'sm' | 'md' | 'lg';

// prettier-ignore
type ButtonVariant = 'default' | 'ghost' | 'primary' | 'secondary' | 'text' | 'white' | 'danger' | 'success'

export interface ButtonIconProps extends ButtonBaseProps {
  name: string;
  prefix?: IconPrefix;
  variant?: ButtonVariant;
  size?: ButtonSize;
}
