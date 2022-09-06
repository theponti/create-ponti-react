import PropTypes, { InferProps } from 'prop-types';

import Button from 'components/Button';
import Link from 'components/Link';
import { APP_NAME, ROUTES } from 'services/constants';

import styles from './Header.module.scss';

function Header({ isAuthenticated, onLogin }: InferProps<typeof Header.propTypes>) {
  return (
    <header className={styles.header}>
      <div className={styles.rightNav}>
        <Link to="/" className={styles.appName}>
          {APP_NAME}
        </Link>
      </div>
      <div className={styles.leftNav}>
        {isAuthenticated ? (
          <Link className={styles.menuItem} to={ROUTES.ACCOUNT_PATH}>
            Account
          </Link>
        ) : (
          <Button onClick={onLogin} variant="text">
            Get Started
          </Button>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default Header;
