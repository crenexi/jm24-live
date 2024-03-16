import { FC } from 'react';
import logger from '@services/logger';
import ButtonBase from '../ButtonBase';
import { ButtonIconProps } from './ButtonIcon.types';
import Icon from '../../legos/Icon';
import sy from './ButtonIcon.styles';

const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const {
    name,
    prefix = 'fal',
    variant = 'default',
    size = 'md',
    sx,
    ...otherProps
  } = props;

  // Merge styles with sx prop if provided
  const sxButtonIcon = {
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

  if (!name) {
    logger.error('Icon name not provided!');
    return null;
  }

  return (
    <ButtonBase {...otherProps} sx={sxButtonIcon} onlyIcon>
      <Icon name={name} prefix={prefix} />
    </ButtonBase>
  );
};

export default ButtonIcon;
