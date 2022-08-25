import t, { InferProps } from 'prop-types';
import styles from './FormGroup.module.scss';

function FormGroup({ children }: InferProps<typeof FormGroup.propTypes>) {
  return <div className={styles.container}>{children}</div>;
}

FormGroup.propTypes = {
  children: t.node.isRequired,
};

export default FormGroup;
