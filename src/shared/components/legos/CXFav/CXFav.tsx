import { FC } from 'react';
import classNames from 'classnames';
import sy from './CXFav.scss';

type CXFavProps = {
  theme?: 'cx' | 'cf' | 'cu';
  variant?: 'main' | 'light' | 'white' | 'black';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const urlAssets = 'https://www.crenexi.com/assets/brand';

const CXFav: FC<CXFavProps> = ({ theme, variant, size }) => {
  const src = `${urlAssets}/${theme}-fav-${variant}.svg`;

  if (src.includes(' ')) {
    throw new Error('CXFav src url contains a space!');
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
      <img className={sy.fav} src={src} alt="Crenexi Fav" />{' '}
    </div>
  );
};

CXFav.defaultProps = {
  theme: 'cx',
  variant: 'main',
  size: 'md',
};

export default CXFav;
