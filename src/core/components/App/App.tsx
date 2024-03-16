import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary, ErrorFallback, WedLogo } from '@components/legos';
import { Loading } from '@components/feedback';

import AppRoutes from './AppRoutes';
import ScrollToTop from './ScrollToTop';
import MainHeader from '../MainHeader';
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
            <Loading />
          </div>
        </div>
      ) : (
        <div className={sy.app}>
          <ScrollToTop>
            <MainHeader />
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
