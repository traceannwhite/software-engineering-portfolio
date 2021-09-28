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
          <Link href="/projects" className={styles.link}>
            <span className={styles.hover}>Projects</span>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="/about" className={styles.link}>
            <span className={styles.hover}>
              <div>About</div>
            </span>
          </Link>
        </div>
        <div className={styles.link}>
          <Link href="mailto:traceannwhite@gmail.com" className={styles.link}>
            <span className={styles.hover}>Contact</span>
          </Link>
        </div>
        <div className={styles.link}>
          <Link
            href="/documents/Trace_White_Full-Stack_Developer_Resume.pdf"
            className={styles.link}
          >
            <span className={styles.hover}>Resume</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
