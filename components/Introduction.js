import styles from "../styles/Introduction.module.scss";
import BioPhoto from "./BioPhoto";
import SocialMedia from "./SocialMedia";
import HeroIcons from "./HeroIcons";

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <HeroIcons />
      <h2 className={styles.intro}>Hi, I&apos;m Trace</h2>
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
      <SocialMedia />
    </div>
  );
};

export default Introduction;
