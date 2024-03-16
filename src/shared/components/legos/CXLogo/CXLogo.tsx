import { FC } from 'react';
import classNames from 'classnames';
import sy from './CXLogo.scss';

type CXLogoProps = {
  theme?: 'cx' | 'cf' | 'cu';
  variant?: 'main' | 'light' | 'white' | 'black';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const urlAssets = 'https://www.crenexi.com/assets/brand';

const CXLogo: FC<CXLogoProps> = ({ theme, variant, size }) => {
  const src = `${urlAssets}/${theme}-logo-${variant}.svg`;

  // Ensure no spaces exist
  if (src.includes(' ')) {
    throw new Error('CXLogo src url contains a space!');
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
      <img className={sy.logo} src={src} alt="Crenexi Logo" />{' '}
    </div>
  );
};

CXLogo.defaultProps = {
  theme: 'cx',
  variant: 'main',
  size: 'md',
};

export default CXLogo;
