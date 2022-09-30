import { useCallback, useState } from 'react';
import { supabase } from 'services/supabase';

type VerifyTokenProps = {
  email: string
};
function VerifyToken({ email }: VerifyTokenProps) {
  const TOKEN_ID = 'token';
  const [token, setToken] = useState('');
  const onTokenChange = useCallback((e) => setToken(e.target.value), []);
  const onVerifyToken = useCallback(async (e) => {
    e.preventDefault();

    await supabase.auth.verifyOtp({
      email,
      token,
      type: 'magiclink',
    });
  }, [email, token]);

  return (
    <form onSubmit={onVerifyToken}>
      <div className="alert alert-success shadow-lg mb-6">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" className="text-white stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span className="text-white">Check your email for the login link!</span>
        </div>
      </div>
      <div className="form-control mb-8">
        <label htmlFor={TOKEN_ID} className="input-group">
          <span>Token</span>
          <input
            id={TOKEN_ID}
            className="input input-md input-bordered w-full max-w-xs"
            type="text"
            placeholder="Token"
            value={token}
            onChange={onTokenChange}
          />
        </label>
      </div>
      <button className="btn" type="submit">
        Submit token
      </button>
    </form>
  );
}

export default VerifyToken;
