import PropTypes, { InferProps } from 'prop-types';
import { useCallback } from 'react';
import { Navigate } from 'react-router-dom';

import Button from 'components/Button';
import Link from 'components/Link';
import { APP_NAME, ROUTES } from 'services/constants';

import styles from './Header.module.scss';

function Header({ isAuthenticated }: InferProps<typeof Header.propTypes>) {
  const onLoginClick = useCallback(() => <Navigate to="/signin" />, []);

  return (
    <nav className={styles.wrap}>
      <div className={styles.rightNav}>
        <Link testId="appName" to="/" className={styles.appName}>
          {APP_NAME}
        </Link>
      </div>
      <div className={styles.leftNav}>
        {isAuthenticated ? (
          <Link testId="accountButton" className={styles.menuItem} to={ROUTES.ACCOUNT_PATH}>
            Account
          </Link>
        ) : (
          <Button testId="loginButton" onClick={onLoginClick} variant="text">
            Get Started
          </Button>
        )}
      </div>
    </nav>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
