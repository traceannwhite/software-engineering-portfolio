import styles from "../styles/Header.module.sass";
import Link from "next/link";

export default function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/">Projects</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </header>
  );
}
