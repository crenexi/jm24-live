import { FC } from 'react';
import { assetsUrl } from '@constants/constants';
import classNames from 'classnames';
import sy from './WedLogo.scss';

type WedLogoProps = {
  variant?: 'main' | 'light' | 'dark';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const WedLogo: FC<WedLogoProps> = ({ variant, size }) => {
  const src = `${assetsUrl}/logo-${variant}.svg`;

  // Ensure no spaces exist
  if (src.includes(' ')) {
    throw new Error('WedLogo src url contains a space!');
  }

  const cnEdge = classNames(sy.edge, {
    [sy.edge__xs]: size === 'xs',
    [sy.edge__sm]: size === 'sm',
    [sy.edge__md]: size === 'md',
    [sy.edge__lg]: size === 'lg',
    [sy.edge__xl]: size === 'xl',
  });

  return (
    <div className={cnEdge}>
      <img className={sy.logo} src={src} alt="Wedding Logo" />
    </div>
  );
};

WedLogo.defaultProps = {
  variant: 'main',
  size: 'md',
};

export default WedLogo;
