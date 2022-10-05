import { NavLink } from "react-router-dom";
import { ACCOUNT_PATH } from "services/constants/routes";

import logo from "./logo.webp";

type HeaderProps = {
  isAuthenticated: boolean;
};

function Header({ isAuthenticated }: HeaderProps) {
  return (
    <div className="navbar bg-base-100 sm:mb-16">
      <div className="flex-1 text-primary">
        <NavLink className="btn btn-ghost normal-case text-xl" to="/">
          <img alt="logo" src={logo} />
        </NavLink>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal p-0">
          <li>
            {!isAuthenticated ? (
              <NavLink data-testid="loginLink" to="/signin">
                Get Started
              </NavLink>
            ) : (
              <NavLink data-testid="accountLink" to={ACCOUNT_PATH}>
                My Account
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
