import AlertError from "components/Alerts/Error";
import LoadingButton from "components/Buttons/LoadingButton";
import { useCallback } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteUser } from "services/auth";

import { AppState, authSelectors } from "services/store";
import { supabase } from "services/supabase";

type AccountProps = {
  user: User;
};
function Account({ user }: AccountProps) {
  const navigate = useNavigate();
  const { deleteUser, error, loading } = useDeleteUser();
  const onDeleteAccount = useCallback(async () => {
    await deleteUser(user.id);
  }, [deleteUser, user]);
  const onLogoutClick = useCallback(async () => {
    await supabase.auth.signOut();
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <h1 className="text-3xl mb-8">My account</h1>
      {error ? <AlertError message={error} /> : null}
      <div className="mb-8">
        <p className="mb-2">
          <span className="font-bold text-lg mr-2">Name:</span>
          {user.name}
        </p>
        <p>
          <span className="font-bold text-lg mr-2">Email:</span>
          {user.email}
        </p>
      </div>
      <div
        className="btn btn-outline mb-8 mt-8"
        role="button"
        onClick={onLogoutClick}
        onKeyDown={onLogoutClick}
        tabIndex={0}
      >
        Logout
      </div>
      <div>
        <Link className="btn btn-outline mr-4" to="/account/edit">
          Edit account
        </Link>
        <LoadingButton
          isLoading={loading}
          onClick={onDeleteAccount}
          type="error"
        >
          Delete account
        </LoadingButton>
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: authSelectors.getUser(state) as User,
});

export default connect(mapStateToProps)(Account);
