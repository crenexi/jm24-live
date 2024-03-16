import { FC } from 'react';
import ButtonBase from '../ButtonBase';
import { ButtonProps } from './Button.types';
import sy from './Button.styles';

const Button: FC<ButtonProps> = (props) => {
  const { variant = 'default', size = 'md', sx, ...otherProps } = props;

  // Merge styles with sx prop if provided
  const sxButton = {
    ...sy.variantDefault,
    ...(variant === 'primary' && sy.variantPrimary),
    ...(variant === 'secondary' && sy.variantSecondary),
    ...(variant === 'text' && sy.variantText),
    ...(variant === 'ghost' && sy.variantGhost),
    ...(variant === 'white' && sy.variantWhite),
    ...(variant === 'danger' && sy.variantDanger),
    ...(variant === 'success' && sy.variantSuccess),
    ...(size === 'sm' && sy.sizeSm),
    ...(size === 'lg' && sy.sizeLg),
    ...sx,
  };

  return <ButtonBase {...otherProps} sx={sxButton} />;
};

export default Button;
