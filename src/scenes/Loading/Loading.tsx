import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles.loading}>
      <h3 className={styles.loadingText}>Loading...</h3>
    </div>
  );
}

export default Loading;
