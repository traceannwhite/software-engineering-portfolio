import styles from "../styles/HeroIcons.module.sass";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiSass,
  SiReact,
  SiPython,
  SiAdobephotoshop,
  SiJquery,
  SiNodedotjs,
  SiWordpress,
  SiWebflow,
  SiAdobeillustrator,
  SiFirebase,
  SiRedux,
  SiPhp,
} from "react-icons/si";

const HeroDots = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <span className={styles.icon} id={styles.icon1}>
          <SiRedux className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon2}>
          <SiHtml5 className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon3}>
          <SiCss3 className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon4}>
          <SiSass className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon5}>
          <SiWordpress className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon6}>
          <SiWebflow className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon7}>
          <SiAdobephotoshop className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon8}>
          <SiAdobeillustrator className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon9}>
          <SiJavascript className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon10}>
          <SiJquery className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon11}>
          <SiReact className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon12}>
          <SiNodedotjs className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon13}>
          <SiPhp className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon14}>
          <SiMongodb className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon15}>
          <SiFirebase className={styles.ri} />
        </span>
        <span className={styles.icon} id={styles.icon16}>
          <SiPython className={styles.ri} />
        </span>
      </div>
    </div>
  );
};

export default HeroDots;
