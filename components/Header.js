import styles from "../styles/Header.module.sass";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.link}>
          <Link href="/">
            <span className={styles.hover}>Home</span>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="#div_id_2" className={styles.link}>
            <span className={styles.hover}>Projects</span>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="#div_id_1" className={styles.link}>
            <span className={styles.hover}>
              <div>About</div>
            </span>
          </Link>
        </div>
        <div className={styles.link}>
          <Link
            href="mailto:traceannwhite@gmail.com"
            target="_blank"
            className={styles.link}
          >
            <span className={styles.hover}>Contact</span>
          </Link>
        </div>
        <div className={styles.link}>
          <Link
            href="/documents/Trace_White_Full-Stack_Developer_Resume.pdf"
            target="_blank"
            className={styles.link}
          >
            <span className={styles.hover}>Resume</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
