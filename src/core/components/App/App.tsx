import { FC, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary, ErrorFallback } from '@components/legos';

import AppRoutes from './AppRoutes';
import ScrollToTop from './ScrollToTop';
import sy from './App.scss';

const AUTO_RELOAD_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes

const useAutoReload = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, AUTO_RELOAD_INTERVAL_MS);

    return () => clearInterval(interval);
  }, []);
};

const AppView: FC = () => {
  useAutoReload();

  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className={sy.app}>
          <ScrollToTop>
            <main className={sy.main}>
              <AppRoutes />
            </main>
          </ScrollToTop>
        </div>
      </ErrorBoundary>
    </Router>
  );
};

export default AppView;
