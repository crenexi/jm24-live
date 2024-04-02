import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { SlidesProvider } from '@contexts/SlidesContext';
import { Button } from '@components/action';
import { Icon } from '@components/legos';
import { Views } from './ViewManagerPod';
import sy from './ViewManager.scss';
import ViewProgress from './ViewProgress';

import HelloView from '../HelloView';
import StandardsView from '../StandardsView';
import WishesView from '../WishesView';
import VerticalsView from '../VerticalsView';
import CalloutView from '../CalloutView';
import FeaturesView from '../FeaturesView';

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
      case Views.STANDARDS:
        return <StandardsView />;
      case Views.WISHES:
        return <WishesView />;
      case Views.VERTICALS:
        return <VerticalsView />;
      case Views.CALLOUT:
        return <CalloutView />;
      case Views.FEATURES:
        return <FeaturesView />;
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
