import { useCallback, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import AlertError from "components/Alerts/Error";
import LoadingButton from "components/Buttons/LoadingButton";
import { setUser } from "services/auth";
import { ACCOUNT_PATH } from "services/constants/routes";
import { AppState, authSelectors, store } from "services/store";
import { useAccountEdit } from "services/supabase";

function AccountEdit({ user }: { user: User }) {
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const { editAccount, error, loading } = useAccountEdit({ userId: user.id });
  const onSetUsername = useCallback((e: any) => setName(e.target.value), []);
  const onFormSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      await editAccount({ name });
      store.dispatch(setUser({ ...user, name }));
      navigate(ACCOUNT_PATH);
    },
    [editAccount, navigate, name, user]
  );

  return (
    <div aria-live="polite">
      {error ? (
        <AlertError message="There was an issue updating your profile." />
      ) : null}

      <form onSubmit={onFormSubmit} className="form-widget">
        <div className="form-control mb-8">
          <label htmlFor="name" className="input-group">
            <span>Name</span>
            <input
              id="name"
              type="text"
              className="input input-md input-bordered w-full max-w-xs"
              value={name || ""}
              onChange={onSetUsername}
              disabled={loading}
            />
          </label>
        </div>
        <LoadingButton isSubmit isLoading={loading} type="success">
          Update profile
        </LoadingButton>
      </form>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: authSelectors.getUser(state) as User,
});

export default connect(mapStateToProps)(AccountEdit);
