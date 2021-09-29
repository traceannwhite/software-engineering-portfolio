import styles from "../styles/Footer.module.sass";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <Link href="mailto:traceannwhite@gmail.com" target="_blank">
          <MdEmail />
        </Link>
        <Link href="https://www.linkedin.com/in/tracewhite/" target="_blank">
          <SiLinkedin />
        </Link>
        <Link href="https://github.com/traceannwhite" target="_blank">
          <SiGithub />
        </Link>
      </div>
      <p className={styles.copyright}>
        All rights reservered - Trace White {new Date().getFullYear()}
      </p>
    </footer>
  );
}
