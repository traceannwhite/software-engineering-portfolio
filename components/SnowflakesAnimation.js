import styles from "../styles/SnowflakesAnimation.module.sass";

const SnowflakesAnimation = () => {
  return (
    <div className={styles.snowflakes} aria-hidden="true">
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
      <div className={styles.snowflake}>❅</div>
      <div className={styles.snowflake}>❆</div>
    </div>
  );
};

export default SnowflakesAnimation;
