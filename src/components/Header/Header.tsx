import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ACCOUNT_PATH } from "services/constants/routes";
import { supabase } from "services/supabase";

import logo from "./logo.webp";

type HeaderProps = {
  isAuthenticated: boolean;
};

function Header({ isAuthenticated }: HeaderProps) {
  const navigate = useNavigate();
  const onLogoutClick = useCallback(async () => {
    await supabase.auth.signOut();
    navigate("/");
  }, [navigate]);

  return (
    <div className="navbar bg-base-100 sm:mb-16">
      <div className="flex-1 text-primary">
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">
          <img alt="logo" src={logo} />
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
            <button tabIndex={0} className="btn btn-ghost" type="button">
              My Account
            </button>
            <ul
              tabIndex={0}
              role="menu"
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink className="justify-between" to={ACCOUNT_PATH}>
                  Settings
                </NavLink>
              </li>
              <li>
                <div
                  role="button"
                  onClick={onLogoutClick}
                  onKeyDown={onLogoutClick}
                  tabIndex={0}
                >
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
