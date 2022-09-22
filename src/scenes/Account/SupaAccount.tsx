import { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';

import Button from 'components/Button';
import { supabase } from 'services/supabase';

function SupaAccount({ user }: { user: User }) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(null);

  const onUpdateProfile = useCallback(async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const updates = {
        id: user.id,
        name,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw (error as any);
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }, [user, name]);

  const onSetUsername = useCallback((e) => setName(e.target.value), []);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div aria-live="polite">
      {loading ? (
        'Saving ...'
      ) : (
        <form onSubmit={onUpdateProfile} className="form-widget">
          <div>
            Email:
            {user.email}
          </div>
          <div>
            <label htmlFor="name">
              Name
              <input
                id="name"
                type="text"
                value={name || ''}
                onChange={onSetUsername}
              />
            </label>
          </div>
          <div>
            <Button className="button primary block" disabled={loading} type="submit" variant="success">
              Update profile
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SupaAccount;
