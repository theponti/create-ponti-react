import { ThemeProvider } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from 'components/App';
import { store } from 'services/store';
import theme from 'styles/theme';

import { onAuthStateChanged } from 'firebase/auth';
import { setUser } from 'services/auth';
import { auth } from 'services/firebase';
import './index.css';

// Update Redux when Firebase Auth changes
onAuthStateChanged(auth, (user) => {
  store.dispatch(setUser(user || undefined));
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
