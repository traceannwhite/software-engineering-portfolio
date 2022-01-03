import styles from "../styles/Introduction.module.scss";
import BioPhoto from "./BioPhoto";

const Introduction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.intro}>Hi, I'm Trace</h2>
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

{
  /* <span className={styles.textMotion} style={{ transitionDelay: "0s" }}>
          H
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.02s" }}
        >
          i
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.04s" }}
        >
          ,
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.06s" }}
        >
          {" "}
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.08s" }}
        >
          I
        </span>
        <span className={styles.textMotion} style={{ transitionDelay: "0.1s" }}>
          &apos;
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.12s" }}
        >
          m
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.14s" }}
        >
          {" "}
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.16s" }}
        >
          T
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.18s" }}
        >
          r
        </span>
        <span className={styles.textMotion} style={{ transitionDelay: "0.2s" }}>
          a
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.22s" }}
        >
          c
        </span>
        <span
          className={styles.textMotion}
          style={{ transitionDelay: "0.24s" }}
        >
          e
        </span> */
}
