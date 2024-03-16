import { FC, ReactNode } from 'react';
import { Icon } from '@components/legos';
import sy from './GiveAction.scss';

interface GiveActionProps {
  children: ReactNode;
  icon: string;
  heading: string;
}

const GiveAction: FC<GiveActionProps> = (props) => {
  const { children, icon, heading } = props;

  return (
    <div className={sy.action}>
      <div className={sy.action_icon}>
        <Icon name={icon} />
      </div>
      <h4 className={sy.action_heading}>{heading}</h4>
      <div className={sy.main}>{children}</div>
    </div>
  );
};

export default GiveAction;
