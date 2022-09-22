import Button from 'components/Button';
import { useCallback, useState } from 'react';
import { supabase } from 'services/supabase';

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const onHandleLogin = useCallback(async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert('Check your email for the login link!');
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }, [email]);
  const onEmailChange = useCallback((e) => setEmail(e.target.value), []);

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h1 className="header">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={onHandleLogin}>
            <label htmlFor="email">
              Email
              <input
                id="email"
                className="inputField"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={onEmailChange}
              />
            </label>
            <Button type="submit" variant="success">
              Send magic link
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
