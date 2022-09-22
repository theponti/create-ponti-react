import { useCallback } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Button from 'components/Button';
import { AppState, authSelectors } from 'services/store';
import { supabase } from 'services/supabase';

type AccountProps = {
  user?: User
};
function Account({ user }: AccountProps) {
  const onLogoutClick = useCallback(async () => {
    await supabase.auth.signOut();
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>My account</h1>
      <p>
        {user.name}
      </p>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
      <div>
        <Button onClick={onLogoutClick} testId="logoutButton" variant="danger">
          Log out
        </Button>
      </div>
    </div>
  );
}

Account.defaultProps = {
  user: undefined,
};

const mapStateToProps = (state: AppState) => ({
  user: authSelectors.getUser(state),
});

export default connect(mapStateToProps)(Account);
