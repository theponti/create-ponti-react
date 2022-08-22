import t, { InferProps } from 'prop-types';
import styles from './Label.module.scss';

function Label({ children }: InferProps<typeof Label.propTypes>) {
  return <div className={styles.container}>{children}</div>;
}

Label.propTypes = {
  children: t.node.isRequired,
};

export default Label;
