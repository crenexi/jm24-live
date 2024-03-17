import { FC, ReactNode } from 'react';
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
      <div className={sy.row1}>
        <div className={sy.main}>
          <div className={sy.col}>
            <div className={sy.welcome}>Welcome Message</div>
          </div>
          <div className={sy.col}>
            <div className={sy.brand}>
              <img src={urlLogo} alt="Logo GIF" />
            </div>
          </div>
          <div className={sy.col}>
            <div className={sy.clock}>Clock</div>
          </div>
        </div>
      </div>
      <div className={sy.row2}>
        <div className={sy.events}>Event Timeline</div>
        <div className={sy.prompt}>go.jm2024.com</div>
      </div>
    </div>
  );
};

export default HelloView;
