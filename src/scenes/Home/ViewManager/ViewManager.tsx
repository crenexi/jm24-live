import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { LoadingBlock } from '@components/feedback';
import { SlidesProvider } from '@contexts/SlidesContext';
import HelloView from '../HelloView';
import WishesView from '../WishesView';
import SlidesView from '../SlidesView';
import sy from './ViewManager.scss';

type ViewManagerProps = {
  isReady: boolean;
  view: string | null;
};

export const VIEWS = {
  HELLO: 'hello',
  WISHES: 'wishes',
  SLIDES: 'slides',
};

const ViewManager: FC<ViewManagerProps> = (props) => {
  const { isReady, view } = props;

  // Loading
  if (!isReady) return <LoadingBlock />;

  const jsxView = (() => {
    switch (view) {
      case VIEWS.HELLO:
        return <HelloView />;
      case VIEWS.WISHES:
        return <WishesView />;
      case VIEWS.SLIDES:
        return <SlidesView />;
      default:
        return <Navigate to="/?view=slides" replace />;
    }
  })();

  return (
    <SlidesProvider>
      <div className={sy.view}>{jsxView}</div>
    </SlidesProvider>
  );
};

export default ViewManager;
