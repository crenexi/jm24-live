import { FC, CSSProperties } from 'react';
import classNames from 'classnames';
import Icon from '../../legos/Icon';
import sy from './Loading.scss';

type LoadingSize = 'sm' | 'md' | 'lg';

type LoadingProps = {
  size?: LoadingSize;
  color?: string;
  iconName?: string;
  center?: boolean;
};

const Loading: FC<LoadingProps> = ({
  iconName = 'yin-yang',
  size = 'md',
  color,
  center,
}) => {
  const cnEdge = classNames(sy.edge, {
    [sy.edge__center]: center,
  });

  const cnLoading = classNames(sy.loading, {
    [sy.loading__sm]: size === 'sm',
    [sy.loading__md]: size === 'md' || !size,
    [sy.loading__lg]: size === 'lg',
  });

  // Icon style
  const sxIcon: CSSProperties = {
    color,
    animationDuration: '350ms',
  };

  return (
    <div className={cnEdge}>
      <div className={cnLoading}>
        <div className={sy.loading__spinner}>
          <Icon name={iconName} style={sxIcon} spin />
        </div>
      </div>
    </div>
  );
};

export default Loading;
