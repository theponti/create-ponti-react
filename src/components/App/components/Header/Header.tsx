import { useAuth0 } from '@auth0/auth0-react';
import Button from 'components/Button';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import constants from 'services/constants';
import { ACCOUNT_PATH } from 'services/constants/routes';
import styles from './Header.module.scss';

function Header() {
  const { isAuthenticated, loginWithPopup, logout } = useAuth0();
  const onLogoutClick = useCallback(() => logout(), [logout]);
  const onLoginClick = useCallback(() => loginWithPopup(), [loginWithPopup]);

  return (
    <header className={styles.header}>
      <div className={styles.rightNav}>
        <Link to="ideas" className={styles.appName}>
          {constants.APP_NAME}
        </Link>
      </div>
      <div className={styles.leftNav}>
        {isAuthenticated ? (
          <>
            <Link to={ACCOUNT_PATH} className={styles.menuItem}>
              Account
            </Link>
            <Button className={styles.menuItem} onClick={onLogoutClick}>Log Out</Button>
          </>
        ) : (
          <>
            <Button className={styles.menuItem} onClick={onLoginClick} variant="text">
              Log In
            </Button>
            <Button onClick={onLoginClick}>
              Get Started
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
