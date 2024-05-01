import { FC, Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import { Button } from '@components/action';
import { Icon } from '@components/legos';
import { Loading } from '@components/feedback';
import { View } from '@stypes/View.types';
import useViews from '@hooks/use-views';
import sy from './ViewManager.scss';
import ViewProgress from './ViewProgress';

import HelloView from '../HelloView';
import StandardsView from '../StandardsView';
import WishesView from '../WishesView';
import VerticalsView from '../VerticalsView';
import CalloutView from '../CalloutView';
import FeaturesView from '../FeaturesView';

const ViewManager: FC = () => {
  const { state, actions } = useViews();
  const { error, isLoading, isPlaying } = state.status;

  if (!state.view) return null;

  const jsxView = (() => {
    switch (state.view) {
      case View.HELLO:
        return <HelloView />;
      case View.STANDARDS:
        return <StandardsView />;
      case View.WISHES:
        return <WishesView />;
      case View.VERTICALS:
        return <VerticalsView />;
      case View.CALLOUT:
        return <CalloutView />;
      case View.FEATURES:
        return <FeaturesView />;
      default:
        return <Navigate to="/?view=slides" replace />;
    }
  })();

  return (
    <Fragment>
      <div className={sy.view}>{jsxView}</div>
      <div className={sy.controls}>
        <div className={sy.controls_status}>
          <div className={sy.controls_col}>
            <Icon name={isPlaying ? 'pause' : 'play'} />
          </div>
          <div className={sy.controls_col}>
            {isPlaying && <ViewProgress view={state.view} />}
          </div>
          <div className={sy.controls_col}>
            <div className={sy.controls_item}>
              {isLoading && <Loading size="sm" />}
            </div>
            <div className={sy.controls_item}>
              {error && (
                <div className={sy.controls_errorHint}>
                  <Icon name="triangle-exclamation" />
                  <span>&nbsp;Error</span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={sy.controls_actions}>
          <div className={sy.controls_item}>
            <Button click={actions.toggleMode}>Play/Pause</Button>
          </div>
          <div className={sy.controls_item}>
            {error && (
              <div className={sy.controls_errorText}>
                ERROR: {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewManager;
