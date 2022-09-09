import { useAuth0 } from '@auth0/auth0-react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loading from 'scenes/Loading';

import Account from 'scenes/Account';
import Home from 'scenes/Home';
import NotFound from 'scenes/NotFound';
import { authSelectors, RootState } from 'services/store';

import Header from './components/Header';

const Wrap = styled.div`
  margin: 24px auto;
  max-width: ${(props) => props.theme.breakpoints.xLarge}px;
  display: flex;
`;

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
    <div data-testid="app-container">
      <Header isAuthenticated={isAuthenticated} onLogin={onLogin} />
      <Wrap>
        <Routes>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrap>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: authSelectors.getUser(state),
});

export default connect(mapStateToProps)(App);
