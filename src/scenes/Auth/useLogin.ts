import { AuthError } from "@supabase/supabase-js";
import { useCallback, useState } from "react";
import { supabase } from "services/supabase";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
  const [isTokenSent, setIsTokenSent] = useState(false);

  const sendMagicLink = useCallback(async (email: string) => {
    try {
      setLoading(true);
      // Remove error when attempting to retrieve new email
      setError(null);

      const { error: err } = await supabase.auth.signInWithOtp({
        email,
      });

      if (err) {
        throw err;
      } else {
        setIsTokenSent(true);
      }
    } catch (err: any) { // eslint-disable-line
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    error,
    isTokenSent,
    loading,
    sendMagicLink,
  };
}
