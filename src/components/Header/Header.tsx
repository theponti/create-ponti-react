import GetStartedButton from "components/Buttons/GetStarted";
import { NavLink } from "react-router-dom";
import { ACCOUNT_PATH } from "services/constants/routes";

import logo from "./logo.webp";

type HeaderProps = {
  isAuthenticated: boolean;
};

function Header({ isAuthenticated }: HeaderProps) {
  return (
    <nav className="navbar bg-base-100 mb-10 sm:mb-16">
      <div className="w-full md:w-4/5 xl:w-3/5 md:mx-auto">
        <div className="flex-1 text-primary">
          <NavLink className="btn btn-ghost normal-case text-xl" to="/">
            <img alt="logo" src={logo} />
          </NavLink>
        </div>
        <div className="flex-none gap-2">
          <ul className="menu menu-horizontal p-0">
            <li>
              {!isAuthenticated ? (
                <GetStartedButton />
              ) : (
                <NavLink data-testid="accountLink" to={ACCOUNT_PATH}>
                  My Account
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
