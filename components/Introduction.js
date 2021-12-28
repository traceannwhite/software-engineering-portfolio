import styles from "../styles/Introduction.module.scss";
import BioPhoto from "./BioPhoto";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.intro}>Hi, I&apos;m Trace</h1>
      <BioPhoto />
      <div className={styles.box}>
        <ul className={styles.list}>
          <li className={styles.item}>a web designer</li>
          <li className={styles.item}>a web developer</li>
          <li className={styles.item}>an educator</li>
          <li className={styles.item}>a lifelong learner</li>
        </ul>
      </div>
      <p>based in Oklahoma City, OK.</p>
    </div>
  );
};

export default Introduction;
