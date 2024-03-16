import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary, ErrorFallback } from '@components/legos';
import { Loading } from '@components/feedback';

import AppRoutes from './AppRoutes';
import ScrollToTop from './ScrollToTop';
import sy from './App.scss';

type AppViewProps = {
  isSplash: boolean;
};

const AppView: FC<AppViewProps> = ({ isSplash }) => (
  <Router>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {isSplash ? (
        <div className={sy.splash}>
          <div className={sy.splash_main}>
            <Loading size="lg" />
          </div>
        </div>
      ) : (
        <div className={sy.app}>
          <ScrollToTop>
            <main className={sy.main}>
              <AppRoutes />
            </main>
          </ScrollToTop>
        </div>
      )}
    </ErrorBoundary>
  </Router>
);

export default AppView;
