import { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'services/auth';
import { AppState, authSelectors, store } from 'services/store';

import { useAccountEdit } from 'services/supabase';

function AccountEdit({ user }: { user: User }) {
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const { editAccount, error, loading } = useAccountEdit({ userId: user.id });
  const onSetUsername = useCallback((e) => setName(e.target.value), []);
  const onFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    const newUser = await editAccount({ name });
    if (newUser) {
      store.dispatch(setUser(newUser[0]));
      navigate('/account');
    }
  }, [editAccount, navigate, name]);

  return (
    <div aria-live="polite">
      <h1 className="text-4xl mb-8 mt-8 font-bold">
        Edit profile
      </h1>
      {error ? (
        <div className="alert alert-error shadow-lg mb-8">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>There was an issue updating your profile.</span>
          </div>
        </div>
      ) : null}
      {loading ? (
        <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed" disabled={loading}>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Processing...
        </button>
      ) : (
        <form onSubmit={onFormSubmit} className="form-widget">
          <div className="form-control mb-8">
            <label htmlFor="name" className="input-group">
              <span>Name</span>
              <input
                id="name"
                type="text"
                className="input input-md input-bordered w-full max-w-xs"
                value={name || ''}
                onChange={onSetUsername}
              />
            </label>
          </div>
          <div>
            <button className="btn" disabled={loading} type="submit">
              Update profile
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: authSelectors.getUser(state) as User,
});

export default connect(mapStateToProps)(AccountEdit);
