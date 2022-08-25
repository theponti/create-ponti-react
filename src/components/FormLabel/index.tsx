import t, { InferProps } from 'prop-types';
import styles from './FormLabel.module.scss';

function FormLabel({ children, htmlFor }: InferProps<typeof FormLabel.propTypes>) {
  return <label className={styles.container} htmlFor={htmlFor}>{children}</label>;
}

FormLabel.propTypes = {
  children: t.node.isRequired,
  htmlFor: t.string.isRequired,
};

export default FormLabel;
