import cx from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Link.module.scss';

function Link({
  children, className, testId, to,
}: InferProps<typeof Link.propTypes>) {
  return (
    <RouterLink data-testid={testId} to={to} className={cx(styles.wrap, className)}>
      {children}
    </RouterLink>
  );
}

Link.defaultProps = {
  className: '',
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  testId: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
