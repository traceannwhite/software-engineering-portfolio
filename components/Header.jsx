import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.sass";

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
            "X"
          ) : (
            <img
              src="https://res.cloudinary.com/dhcagrzcb/image/upload/v1627864926/list_lsoefu.svg"
              alt=""
              // className={styles.hamburger}
            ></img>
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
            // transform: ${menuOpen} ? translateX(100%): translateX(-100%);
          }
        `}
      </style>
      {/* <style jsx>
        {`
          nav {
            width: 100%;
            background-color: transparent;
            position: fixed;
          }
          nav ul {
            flex-direction: column;
            background-color: white;
            position: absolute;
            list-style: none;
            padding: 9px 1em 1em 3em;
            text-transform: uppercase;
            z-index: 10;
            // transform: translateX(0%);
            width: 400px;
            height: 400px;
            background: #bce9d4;
            clip-path: circle(350px at 5% -5%);
            // transition: 0.5s ease-in-out;
          }
          nav button {
            background-color: transparent;
            color: black;
            z-index: 11;
            position: fixed;
          }
          nav ul li {
            font-size: 1.1em;
            padding: 10px;
          }
          a {
            text-decoration: none;
            color: black;
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;