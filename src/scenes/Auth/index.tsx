import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useLogin } from 'services/supabase';
import EmailForm from './EmailForm';
import VerifyToken from './VerifyToken';

type AuthProps = {
  user?: User;
};
function Auth({ user }: AuthProps) {
  const [email, setEmail] = useState('');
  const {
    loading, isTokenSent, error, sendMagicLink,
  } = useLogin();

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

        {error ? (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-black stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-black">{error.message}</span>
            </div>
          </div>
        ) : null}

        {loading ? <div>Sending magic link...</div> : null}

        {!loading && isTokenSent ? <VerifyToken email={email} /> : null}

        {!loading && !isTokenSent ? (
          <EmailForm
            email={email}
            sendMagicLink={sendMagicLink}
            setEmail={setEmail}
          />
        ) : null}
      </div>
    </div>
  );
}

Auth.defaultProps = {
  user: undefined,
};

export default Auth;
