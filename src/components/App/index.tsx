import styled from '@emotion/styled';
import { FC } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Account from 'scenes/Account';
import Home from 'scenes/Home';
import Loading from 'scenes/Loading';
import NotFound from 'scenes/NotFound';
import { User } from 'services/auth';
import { authSelectors, RootState } from 'services/store';

import Header from './components/Header';

const Wrap = styled.div`
  margin: 24px auto;
  max-width: ${(props) => props.theme.breakpoints.xLarge}px;
  display: flex;
`;

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
  isLoading: authSelectors.getIsLoadingAuth(state),
  user: authSelectors.getUser(state),
});

export default connect(mapStateToProps)(App as FC);
