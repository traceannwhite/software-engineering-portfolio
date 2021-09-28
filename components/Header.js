import styles from "../styles/Header.module.sass";
import Link from "next/link";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="mailto:traceannwhite@gmail.com">Contact</Link>
        <Link href="/documents/Trace_White_Full-Stack_Developer_Resume.pdf">
          Resume
        </Link>
      </div>
    </header>
  );
}
