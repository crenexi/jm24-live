import { FC } from 'react';
import { assetsUrl } from '@constants/constants';
import classNames from 'classnames';
import sy from './WedFav.scss';

type WedFavProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const WedFav: FC<WedFavProps> = ({ size }) => {
  const src = `${assetsUrl}/fav.svg`;

  if (src.includes(' ')) {
    throw new Error('WedFav src url contains a space!');
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

WedFav.defaultProps = {
  size: 'md',
};

export default WedFav;
