import { FC } from 'react';
import sy from './HelloView.scss';

type HelloViewProps = {
  isReady: boolean;
  urlLogo: string;
};

const HelloView: FC<HelloViewProps> = (props) => {
  const { isReady, urlLogo } = props;

  // Loading
  if (!isReady) return null;

  return (
    <div className={sy.edge}>
      <div className={sy.main}>
        <div className={sy.welcome}>&nbsp;</div>
        <div className={sy.brand}>
          <img src={urlLogo} alt="Logo GIF" />
        </div>
        <div className={sy.clock}>&nbsp;</div>
        <div className={sy.events}>&nbsp;</div>
      </div>
    </div>
  );
};

export default HelloView;
