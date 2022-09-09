import styled from '@emotion/styled';
import PropTypes, { InferProps } from 'prop-types';

import Button from 'components/Button';
import Link from 'components/Link';
import { APP_NAME, ROUTES } from 'services/constants';

import styles from './Header.module.scss';

const Wrap = styled.header`
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${(props) => props.theme.breakpoints.xLarge}px;
  padding: 16px 0;
`;

function Header({ isAuthenticated, onLogin }: InferProps<typeof Header.propTypes>) {
  return (
    <Wrap>
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
    </Wrap>
  );
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
};

export default Header;
