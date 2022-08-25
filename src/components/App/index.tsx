import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Home from 'scenes/Home';
import NotFound from 'scenes/NotFound';
import { useProfile } from 'services/hooks';
import { authSelectors, RootState } from 'services/store';

import styles from './App.module.css';
import Header from './components/Header';

function App() {
  const { loading } = useProfile();

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div data-testid="app-container" id="app" className="d-flex flex-column h-100">
      <Header />
      <Grid className={styles.wrap}>
        <Routes>
          {/* <Route path="profile" element={<Profile />} /> */}
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
