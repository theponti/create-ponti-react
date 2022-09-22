import { createClient } from '@supabase/supabase-js';

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
