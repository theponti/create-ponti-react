import { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Account from 'scenes/Account';
import Home from 'scenes/Home';
import Loading from 'scenes/Loading';
import NotFound from 'scenes/NotFound';
import { User } from 'services/auth';
import { authSelectors, RootState } from 'services/store';

import styles from './App.module.scss';
import Header from './components/Header';

type AppProps = {
  isLoading: boolean
  user: User
};
function App({ user, isLoading }: AppProps) {
  const isAuthenticated = !!user;

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <div data-testid="app-container">
      <Header isAuthenticated={isAuthenticated} />
      <div className={styles.wrap}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoading: authSelectors.getIsLoadingAuth(state),
  user: authSelectors.getUser(state),
});

export default connect(mapStateToProps)(App as FC);
