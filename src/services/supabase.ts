import { AuthError, createClient } from '@supabase/supabase-js';
import { useCallback, useState } from 'react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getUserById(id: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, name, email')
    .eq('id', id)
    .single();

  return { data, error };
}

export async function createUser(user: User) {
  const { data, error } = await supabase.from('profiles').insert({
    id: user.id,
    email: user.email,
  });

  return { data: data ? data[0] : undefined, error };
}

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
  const [isCodeSent, setIsCodeSent] = useState(false);

  const sendMagicLink = useCallback(async (email) => {
    try {
      setLoading(true);
      // Remove error when attempting to retrieve new email
      setError(null);

      const { error: err } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });

      if (err) {
        throw err;
      } else {
        setIsCodeSent(true);
      }
    } catch (err: any) { // eslint-disable-line
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    error,
    isCodeSent,
    loading,
    sendMagicLink,
  };
}

export function useAccountEdit({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editAccount = useCallback(async ({ name }) => {
    setLoading(true);

    const updates = {
      id: userId,
      name,
      updated_at: new Date(),
    };

    const { data, error: err } = await supabase.from('profiles').upsert(updates);

    if (err) {
      setError(err.message);
    }

    setLoading(false);

    return data;
  }, [userId]);

  return {
    editAccount,
    error,
    loading,
  };
}
