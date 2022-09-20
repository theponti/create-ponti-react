import PropTypes, { InferProps } from 'prop-types';

import Button from 'components/Button';
import Link from 'components/Link';
import { APP_NAME, ROUTES } from 'services/constants';

import { useCallback } from 'react';
import { authenticateAsync } from 'services/auth';
import { store } from 'services/store';
import styles from './Header.module.scss';

function Header({ isAuthenticated }: InferProps<typeof Header.propTypes>) {
  const onLoginClick = useCallback(() => {
    store.dispatch(authenticateAsync());
  }, []);

  return (
    <div className={styles.wrap}>
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
    </div>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Header;
