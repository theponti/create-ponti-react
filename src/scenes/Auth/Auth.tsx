import { useState } from "react";
import { Navigate } from "react-router-dom";

import AlertError from "components/Alerts/Error";

import PageWrap from "components/PageWrap";
import EmailForm from "./EmailForm";
import useLogin from "./useLogin";
import VerifyToken from "./VerifyToken";

type AuthProps = {
  user?: User;
};
function Auth({ user }: AuthProps) {
  const [email, setEmail] = useState("");
  const { loading, isTokenSent, error, sendMagicLink } = useLogin();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <PageWrap>
      <div aria-live="polite">
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
    </PageWrap>
  );
}

Auth.defaultProps = {
  user: undefined,
};

export default Auth;
