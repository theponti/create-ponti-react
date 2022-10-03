import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "services/supabase";

type VerifyTokenProps = {
  email: string;
};
function VerifyToken({ email }: VerifyTokenProps) {
  const TOKEN_ID = "token";
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const onTokenChange = useCallback((e) => setToken(e.target.value), []);
  const onVerifyToken = useCallback(
    async (e) => {
      e.preventDefault();

      await supabase.auth.verifyOtp({
        email,
        token,
        type: "magiclink",
      });

      navigate("/");
    },
    [email, navigate, token]
  );

  return (
    <form onSubmit={onVerifyToken}>
      <div className="alert alert-success shadow-lg mb-6">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-white">Code sent!</span>
        </div>
      </div>
      <p className="text mb-8">
        {`Please check your email. We've sent a login code to ${email}`}
      </p>
      <div className="form-control mb-8">
        <label htmlFor={TOKEN_ID} className="input-group">
          <span>Code</span>
          <input
            id={TOKEN_ID}
            className="input input-md input-bordered w-full max-w-xs"
            type="text"
            placeholder="6-digit code"
            value={token}
            onChange={onTokenChange}
          />
        </label>
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default VerifyToken;
