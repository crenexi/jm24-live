import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import sy from './Block.scss';

type BlockProps = {
  children?: ReactNode;
  label?: string;
  isDark?: boolean;
};

const Block: FC<BlockProps> = ({ children, label, isDark }) => {
  const cnEdge = classNames(sy.edge, {
    [sy.edge__dark]: isDark,
  });

  return (
    <div className={cnEdge}>
      {label && <div className={sy.label}>{label}</div>}
      <div className={sy.main}>{children}</div>
    </div>
  );
};

Block.defaultProps = {
  children: 'TODO',
  label: '',
  isDark: false,
};

export default Block;
