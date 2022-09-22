import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppState, authSelectors } from 'services/store';

type AccountProps = {
  user?: User
};
function Account({ user }: AccountProps) {
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1 className="text-3xl mb-8">My account</h1>
      <p>
        {user.name}
      </p>
      <p>
        <span className="font-bold text-lg mr-2">Email:</span>
        {user.email}
      </p>
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
