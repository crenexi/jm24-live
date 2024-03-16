import { FC, useMemo, MouseEvent } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import MuiButton from '@mui/material/Button';
import MuiIconButton from '@mui/material/IconButton';
import logger from '@services/logger';
import Icon from '../../legos/Icon';
import { ButtonBaseProps, SxButtonProps, SxNavLink } from './ButtonBase.types';
import sy from './ButtonBase.styles';

const ButtonBase: FC<ButtonBaseProps> = (props) => {
  const { mode = 'action', children, href, target, rel, to } = props;
  const { startIcon, endIcon, disabled, download, unfocus, onlyIcon } = props;
  const { classes, sx, sxActive, click } = props;

  // Ensure routing button has 'to'
  if ((mode === 'link' || mode === 'navLink') && !to) {
    logger.error(`Prop 'to' is required when mode is '${mode}'`);
    return null;
  }

  // Ensure anchor button has 'href'
  if (mode === 'a' && !href) {
    logger.error(`Prop 'href' is required when mode is 'a'`);
    return null;
  }

  // Modified click
  const onClick = (ev: MouseEvent<HTMLButtonElement>): void => {
    if (unfocus) ev.currentTarget.blur();
    if (click) click(ev);
  };

  // Prepare props
  const sxBtnProps: SxButtonProps = { disabled, download, classes, onClick };

  if (!onlyIcon) {
    sxBtnProps.startIcon = !startIcon ? undefined : <Icon name={startIcon} />;
    sxBtnProps.endIcon = !endIcon ? undefined : <Icon name={endIcon} />;
  }

  // Prepare styled button
  const SxButton = useMemo(() => {
    // MUI IconButton
    if (onlyIcon) {
      return styled(MuiIconButton)({
        ...sy.iconButton,
        ...sx,
      });
    }

    // MUI Button
    return styled(MuiButton)({
      ...sy.button,
      ...sx,
    });
  }, [onlyIcon, sx]);

  // Button based on mode
  switch (mode) {
    case 'action':
      return <SxButton {...sxBtnProps}>{children}</SxButton>;
    case 'link':
      return (
        <SxButton component={Link} to={to} {...sxBtnProps}>
          {children}
        </SxButton>
      );
    case 'navLink': {
      const sxNavLink: SxNavLink = ({ isActive }) => {
        return isActive ? sxActive : undefined;
      };

      return (
        <SxButton component={NavLink} to={to} style={sxNavLink} {...sxBtnProps}>
          {children}
        </SxButton>
      );
    }
    case 'a':
      return (
        <SxButton
          component="a"
          href={href}
          target={target}
          rel={rel}
          {...sxBtnProps}
        >
          {children}
        </SxButton>
      );
    case 'mock':
      return (
        <SxButton component="div" {...sxBtnProps}>
          {children}
        </SxButton>
      );
    default:
      throw new Error(`Invalid button mode: ${mode}`);
  }
};

export default ButtonBase;
