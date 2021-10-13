import styles from "../styles/Footer.module.sass";
import Link from "next/link";
// import { MdEmail } from "react-icons/md";
// import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        All rights reservered - Trace White {new Date().getFullYear()}
      </p>
    </footer>
  );
}
