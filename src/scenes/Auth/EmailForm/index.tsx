import { SyntheticEvent, useCallback } from "react";

type EmailFormProps = {
  email: string;
  sendMagicLink: (email: string) => void;
  setEmail: (email: string) => void;
};
function EmailForm({ email, sendMagicLink, setEmail }: EmailFormProps) {
  const EMAIL_ID = "email";
  const onEmailChange = useCallback(
    (e) => setEmail(e.target.value),
    [setEmail]
  );
  const onFormSubmit = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      sendMagicLink(email);
    },
    [email, sendMagicLink]
  );

  return (
    <form onSubmit={onFormSubmit}>
      <p className="text mb-8">
        Enter your email and we&apos;ll send you a login code.
      </p>
      <div className="form-control mb-8">
        <label htmlFor={EMAIL_ID} className="input-group">
          <span>Email</span>
          <input
            className="input input-md input-bordered w-full max-w-xs"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={onEmailChange}
          />
        </label>
      </div>
      <button type="submit" className="btn">
        Get code
      </button>
    </form>
  );
}

export default EmailForm;
