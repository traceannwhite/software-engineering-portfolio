import styles from "../styles/SocialIcons.module.sass";
import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { RiHaze2Fill } from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div className={styles.social}>
      <a
        href="mailto:traceannwhite@gmail.com"
        target="_blank"
        rel="noreferrer"
        alt="Email"
        role="img"
        aria-label="Email Icon"
      >
        <MdEmail className={styles.socialicon} />
      </a>
      <a
        href="https://www.linkedin.com/in/tracewhite/"
        target="_blank"
        rel="noreferrer"
        alt="LinkedIn"
        role="img"
        aria-label="LinkedIn Icon"
      >
        <SiLinkedin className={styles.socialicon} />
      </a>
      <a
        href="https://github.com/traceannwhite"
        target="_blank"
        rel="noreferrer"
        alt="Github"
        role="img"
        aria-label="Github Icon"
      >
        <SiGithub className={styles.socialicon} />
      </a>
    </div>
  );
};

export default SocialMedia;
