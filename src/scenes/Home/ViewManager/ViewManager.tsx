import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { SlidesProvider } from '@contexts/SlidesContext';
import { ButtonIcon } from '@components/action';
import { Views } from './ViewManagerPod';
import HelloView from '../HelloView';
import WishesView from '../WishesView';
import SlidesView from '../SlidesView';
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

  return (
    <SlidesProvider>
      <div className={sy.view}>
        {jsxView}
        <div className={sy.modeToggle}>
          <ButtonIcon name={modeIcon} click={togglePlay} />
        </div>
      </div>
    </SlidesProvider>
  );
};

export default ViewManager;
