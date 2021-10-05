import styles from "../styles/Header.module.sass";
// import Link from "next/link";
import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        {/* <NavbarBrand href="/" className="mr-auto">
          reactstrap
        </NavbarBrand> */}
        <div></div>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/" className={styles.links}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#div_id_1" className={styles.links}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#div_id_2" className={styles.links}>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="mailto:traceannwhite@gmail.com"
                target="_blank"
                className={styles.links}
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/documents/Trace_White_Full-Stack_Developer_Resume.pdf"
                target="_blank"
                className={styles.links}
              >
                Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
