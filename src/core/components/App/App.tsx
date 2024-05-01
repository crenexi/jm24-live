import { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary, ErrorFallback } from '@components/legos';

import AppRoutes from './AppRoutes';
import ScrollToTop from './ScrollToTop';
import sy from './App.scss';

const AppView: FC = () => (
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

export default AppView;
