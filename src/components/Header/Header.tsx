import { useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { APP_NAME } from 'services/constants';
import { supabase } from 'services/supabase';

type HeaderProps = {
  isAuthenticated: boolean,
};

function Header({ isAuthenticated }: HeaderProps) {
  const navigate = useNavigate();
  const onLogoutClick = useCallback(async () => {
    await supabase.auth.signOut();
    navigate('/');
  }, [navigate]);

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 text-primary">
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">
          {APP_NAME}
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        {!isAuthenticated ? (
          <NavLink data-testid="loginButton" className="btn" to="/signin">
            Get Started
          </NavLink>
        ) : null}
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <button tabIndex={0} className="btn btn-ghost btn-circle avatar" type="button">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="avatar" />
              </div>
            </button>
            <ul tabIndex={0} role="menu" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <NavLink className="justify-between" to="/account">
                  Account
                </NavLink>
              </li>
              <li>
                <div role="button" onClick={onLogoutClick} onKeyDown={onLogoutClick} tabIndex={0}>
                  Logout
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
