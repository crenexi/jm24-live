import { FC } from 'react';
import { Icon } from '@components/legos';
import sy from './Overline.scss';

type OverlineProps = {
  label?: string;
  icon: string;
};

const Overline: FC<OverlineProps> = ({ label, icon }) => (
  <div className={sy.edge}>
    {label && <div className={sy.label}>{label}</div>}
    <div className={sy.icon}>
      <Icon name={icon} />
    </div>
  </div>
);

export default Overline;
