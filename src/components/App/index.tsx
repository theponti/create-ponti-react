import { useAuth0 } from '@auth0/auth0-react';
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loading from 'scenes/Loading';

import Home from 'scenes/Home';
import NotFound from 'scenes/NotFound';
import Profile from 'scenes/Profile';
import { authSelectors, RootState } from 'services/store';

import styles from './App.module.css';
import Header from './components/Header';

function App() {
  const {
    isAuthenticated, isLoading, loginWithPopup: onLogin,
  } = useAuth0();

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <div data-testid="app-container" id="app" className="d-flex flex-column h-100">
      <Header isAuthenticated={isAuthenticated} onLogin={onLogin} />
      <Grid className={styles.wrap}>
        <Routes>
          <Route path="/account" element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: authSelectors.getUser(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
