import { useState, useEffect } from 'react';

// Dependencies
import { ThemeProvider } from '@mui/material';
import { SettingsProvider } from '@contexts/SettingsContext';
import { DataStaticProvider } from '@contexts/DataStaticContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { fontAwesome, materialUI } from '@core/libraries';

// Base styles (import before App)
import '@core/styles/_index.scss';

// Implementations
import appSettings from '@config/app-settings';
import dataStatic from '@config/data-static';
import { logLiftoff } from './lifttoff';
import App from './App';

/* Application */
const AppPod = () => {
  // Environment
  const isProd = process.env.NODE_ENV === 'production';

  // Initialize MUI theme
  const theme = materialUI.createTheme();

  // Initialize libraries
  fontAwesome.buildLibrary();

  // React Query
  const queryClient = new QueryClient();

  // Splash state
  const [isSplash, setIsSplash] = useState<boolean>(true);

  // Application is ready
  useEffect(() => {
    const onReady = () => {
      if (!isProd) logLiftoff({ theme });
      setIsSplash(false);
    };

    // Show splash first
    const timeout = setTimeout(onReady, appSettings.splashDuration);
    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <SettingsProvider value={appSettings}>
      <DataStaticProvider value={dataStatic}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <App isSplash={isSplash} />
          </QueryClientProvider>
        </ThemeProvider>
      </DataStaticProvider>
    </SettingsProvider>
  );
};

export default AppPod;
