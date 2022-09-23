import { connect } from 'react-redux';

import { AppState, authSelectors } from 'services/store';

type AccountProps = {
  user: User
};
function Account({ user }: AccountProps) {
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

const mapStateToProps = (state: AppState) => ({
  user: authSelectors.getUser(state) as User,
});

export default connect(mapStateToProps)(Account);
