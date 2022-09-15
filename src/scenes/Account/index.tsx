import {
  FC, useCallback,
} from 'react';
import { Navigate } from 'react-router-dom';

import Button from 'components/Button';
import { connect } from 'react-redux';
import { logout, User } from 'services/auth';
import { AppState, authSelectors, store } from 'services/store';

type AccountProps = {
  user: User
};
function Account({ user }: AccountProps) {
  const onLogoutClick = useCallback(() => {
    store.dispatch(logout());
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>My account</h1>
      <p>
        {user.photoURL ? <img src={user.photoURL} alt="avatar" /> : null}
      </p>
      <p>{user.displayName}</p>
      <p>
        <b>Email verified:</b>
        {user.emailVerified}
      </p>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
      <p>
        <Button onClick={onLogoutClick} testId="logoutButton" variant="danger">
          Log out
        </Button>
      </p>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: authSelectors.getUser(state),
});

export default connect(mapStateToProps)(Account as FC);
