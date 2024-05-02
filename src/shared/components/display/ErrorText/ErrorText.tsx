import { FC, ReactNode } from 'react';
import { Icon } from '@components/legos';
import sy from './ErrorText.scss';

type ErrorTextProps = {
  children: ReactNode;
};

const ErrorText: FC<ErrorTextProps> = ({ children }) => (
  <div className={sy.edge}>
    <div className={sy.icon}>
      <Icon name="bug" />
    </div>
    <div className={sy.text}>{children}</div>
  </div>
);

export default ErrorText;
