import { AppState, Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/App';
import { store } from 'services/store';
import history from 'services/utils/history';
import theme from 'styles/theme';

import './index.css';

const queryClient = new QueryClient();
const { VITE_AUTH0_CLIENT_ID, VITE_AUTH0_DOMAIN } = import.meta.env;

const onRedirectCallback = (appState?: AppState) => {
  const returnTo = appState && appState.returnTo;
  history.push(returnTo || window.location.pathname);
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      clientId={VITE_AUTH0_CLIENT_ID}
      domain={VITE_AUTH0_DOMAIN}
      onRedirectCallback={onRedirectCallback}
      redirectUri={window.location.origin}
    >
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </ThemeProvider>
        </Provider>
      </Router>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
