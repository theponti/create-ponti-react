import { createClient } from "@supabase/supabase-js";
import { useCallback, useState } from "react";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function getUserById(id: string) {
  const { data, error } = await supabase
    .from("profiles")
    .select("id, name, email")
    .eq("id", id)
    .single();

  return { data, error };
}

export async function createUser(user: User) {
  const { data, error } = await supabase.from("profiles").insert({
    id: user.id,
    email: user.email,
  });

  return { data: data ? data[0] : undefined, error };
}

export function useAccountEdit({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editAccount = useCallback(
    async ({ name }: { name: string | undefined }) => {
      setLoading(true);

      const updates = {
        name,
        updated_at: new Date(),
      };

      const { data, error: err } = await supabase
        .from("profiles")
        .update(updates)
        .match({
          id: userId,
        });

      if (err) {
        setError(err.message);
      }

      setLoading(false);

      return data;
    },
    [userId]
  );

  return {
    editAccount,
    error,
    loading,
  };
}
