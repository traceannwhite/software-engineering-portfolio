import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.sass";
import { RiCloseLine, RiMenu4Fill } from "react-icons/ri";

const Header = (props) => {
  // set up useState and set the menu state to closed
  const [menuOpen, setMenuOpen] = useState(false);
  // update state when menu is open (! overrides )
  const handleToggle = () => {
    setMenuOpen((prev) => !prev);
  };
  const hideMenu = () => setMenuOpen(false);

  return (
    <div>
      <nav className={styles.nav}>
        <button
          onClick={handleToggle}
          open={menuOpen}
          className={styles.menubtn}
        >
          {menuOpen ? (
            <RiCloseLine className={styles.hamburger} />
          ) : (
            <RiMenu4Fill className={styles.hamburger} />
          )}
        </button>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/" onClick={() => hideMenu()} exact>
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/#div_id_1" onClick={() => hideMenu()} exact>
              About
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/#div_id_2" onClick={() => hideMenu()} exact>
              Projects
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="mailto:traceannwhite@gmail.com"
              target="_blank"
              className={styles.link}
              onClick={() => hideMenu()}
              exact
            >
              Contact
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              href="/documents/Trace_White_Full-Stack_Developer_Resume.pdf"
              target="_blank"
              onClick={() => hideMenu()}
              exact
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          nav ul {
            position: ${menuOpen ? "absolute" : "none"};
            opacity: ${menuOpen ? "1" : "0"};
            transition: ${menuOpen ? "opacity .4s ease-in-out" : "none"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
