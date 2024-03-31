import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { SlidesProvider } from '@contexts/SlidesContext';
import { Button } from '@components/action';
import { Icon } from '@components/legos';
import { Views } from './ViewManagerPod';
import HelloView from '../HelloView';
import WishesView from '../WishesView';
import SlidesView from '../SlidesView';
import ViewProgress from './ViewProgress';
import sy from './ViewManager.scss';

type ViewManagerProps = {
  view: string | null;
  isPlaying: boolean;
  togglePlay: () => void;
};

const ViewManager: FC<ViewManagerProps> = (props) => {
  const { view, isPlaying, togglePlay } = props;
  const modeIcon = isPlaying ? 'pause' : 'play';

  const jsxView = (() => {
    switch (view) {
      case Views.HELLO:
        return <HelloView />;
      case Views.WISHES:
        return <WishesView />;
      case Views.SLIDES:
        return <SlidesView />;
      default:
        return <Navigate to="/?view=slides" replace />;
    }
  })();

  if (!view) return null;

  return (
    <SlidesProvider>
      <div className={sy.view}>{jsxView}</div>
      <div className={sy.controls}>
        <div className={sy.controls_status}>
          <div className={sy.controls_col}>
            <Icon name={modeIcon} />
          </div>
          <div className={sy.controls_col}>
            {isPlaying && <ViewProgress view={view} />}
          </div>
          <div className={sy.controls_col}>&nbsp;</div>
        </div>
        <div className={sy.controls_actions}>
          <Button click={togglePlay}>Play/Pause</Button>
        </div>
      </div>
    </SlidesProvider>
  );
};

export default ViewManager;
