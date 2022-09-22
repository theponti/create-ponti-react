import { Session } from '@supabase/supabase-js';
import { FC, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Auth from 'scenes/Auth';
import Home from 'scenes/Home';
import Loading from 'scenes/Loading';
import NotFound from 'scenes/NotFound';
import { getUserFromSession } from 'services/auth';
import { authSelectors, RootState, store } from 'services/store';
import { supabase } from 'services/supabase';

import Account from 'scenes/Account';
import styles from './App.module.scss';
import Header from './components/Header';

type AppProps = {
  user: User
};
function App({ user }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [session, setSession] = useState<Session | null>(null);
  const isAuthenticated = !!session;

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLoading(false);
      setSession(data.session);
      if (data.session) {
        store.dispatch(getUserFromSession(data.session));
      }
    });

    supabase.auth.onAuthStateChange((_event, ses) => {
      setSession(ses);
    });
  }, []);

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
          <Route path="signin" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
          {user ? <Route path="account" element={<Account />} /> : null}
        </Routes>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: authSelectors.getUser(state),
});

export default connect(mapStateToProps)(App as FC);
