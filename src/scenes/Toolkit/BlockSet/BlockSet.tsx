import { FC, ReactNode } from 'react';
import sy from './BlockSet.scss';

type BlockSetProps = {
  children: ReactNode;
  heading: string;
};

const BlockSet: FC<BlockSetProps> = ({ children, heading }) => (
  <div className={sy.edge}>
    <div className={sy.heading}>{heading}</div>
    <div className={sy.main}>{children}</div>
  </div>
);

export default BlockSet;
