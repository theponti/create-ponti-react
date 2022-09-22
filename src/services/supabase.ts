import { createClient } from '@supabase/supabase-js';
import { useCallback, useState } from 'react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/* eslint-disable-next-line import/prefer-default-export */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getUserById(id: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, name, email')
    .eq('id', id)
    .single();

  if (error) {
  throw error as any; // eslint-disable-line
  }
  return data;
}

export async function createUser(user: User) {
  const { data, error } = await supabase.from('profiles').insert({
    id: user.id,
    email: user.email,
  });

  if (error) {
    throw (error as any); // eslint-disable-line
  }

  return data;
}

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCodeSent, setIsCodeSent] = useState(false);

  const sendMagicLink = useCallback(async (email) => {
    try {
      setLoading(true);
      const { error: err } = await supabase.auth.signInWithOtp({ email });

      if (err) {
        setError(err.message);
      } else {
        setIsCodeSent(true);
      }
  } catch (err: any) { // eslint-disable-line
      setError(err.error_description || err.message);
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
