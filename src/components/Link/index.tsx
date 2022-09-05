import cx from 'classnames';
import PropTypes, { InferProps } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Link.module.scss';

function Link({ children, className, to }: InferProps<typeof Link.propTypes>) {
  return (
    <RouterLink to={to} className={cx(styles.wrap, className)}>
      {children}
    </RouterLink>
  );
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Link;
