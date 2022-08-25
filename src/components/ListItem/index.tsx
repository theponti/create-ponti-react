import t, { InferProps } from 'prop-types';
import styles from './ListItem.module.scss';

function ListItem({ children }: InferProps<typeof ListItem.propTypes>) {
  return <div className={styles.container}>{children}</div>;
}

ListItem.propTypes = {
  children: t.node.isRequired,
};

export default ListItem;
