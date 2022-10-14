import AlertError from "components/Alerts/Error";
import LoadingButton from "components/Buttons/LoadingButton";
import PageWrap from "components/PageWrap";
import { useCallback } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDeleteUser } from "services/auth";

import { AppState, authSelectors } from "services/store";
import { supabase } from "services/supabase";
import AccountEdit from "./AccountEdit";

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
    <PageWrap>
      <h1 className="text-3xl mb-8">My account</h1>
      {error ? <AlertError message={error} /> : null}
      <div className="mb-8">
        <p>
          <span className="font-bold text-lg mr-2">Email:</span>
          {user.email}
        </p>
      </div>
      <div className="mb-8">
        <AccountEdit />
      </div>
      <hr />
      <button
        className="btn btn-outline mb-8 mt-8"
        data-testid="logoutButton"
        type="button"
        onClick={onLogoutClick}
        onKeyDown={onLogoutClick}
      >
        Logout
      </button>
      <div>
        <LoadingButton
          isLoading={loading}
          onClick={onDeleteAccount}
          type="error"
        >
          Delete account
        </LoadingButton>
      </div>
    </PageWrap>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: authSelectors.getUser(state) as User,
});

export default connect(mapStateToProps)(Account);
