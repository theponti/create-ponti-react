import AlertError from 'components/Alerts/Error';
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
        <h1 className="text-4xl mb-4 font-bold">Sign In</h1>

        {error ? <AlertError message={error.message} /> : null}

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
