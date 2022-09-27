import { SyntheticEvent, useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useLogin } from 'services/supabase';

type AuthProps = {
  user?: User;
};
function Auth({ user }: AuthProps) {
  const [email, setEmail] = useState('');
  const EMAIL_ID = 'email';
  const {
    loading, isCodeSent, error, sendMagicLink,
  } = useLogin();
  const onEmailChange = useCallback((e) => setEmail(e.target.value), []);
  const onFormSubmit = useCallback(async (e: SyntheticEvent) => {
    e.preventDefault();
    sendMagicLink(email);
  }, [email, sendMagicLink]);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="row flex-center flex justify-items-center w-full mt-16">
      <div className="col-6 form-widget mx-auto" aria-live="polite">
        <h1 className="text-4xl mb-4 font-bold">
          Sign In
        </h1>

        <p className="text mb-8">
          Sign in via magic link with your email below
        </p>

        {error ? <div>There was an issue sending your magic link.</div> : null}

        {loading ? <div>Sending magic link...</div> : null}

        {!loading && isCodeSent ? (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-white stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-white">Check your email for the login link!</span>
            </div>
          </div>
        ) : null}

        {!loading && !isCodeSent ? (
          <form onSubmit={onFormSubmit}>
            <div className="form-control mb-8">
              <label htmlFor={EMAIL_ID} className="input-group">
                <span>Email</span>
                <input
                  id="email"
                  className="input input-md input-bordered w-full max-w-xs"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={onEmailChange}
                />
              </label>
            </div>
            <button type="submit" className="btn">
              Send magic link
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
}

Auth.defaultProps = {
  user: undefined,
};

export default Auth;
