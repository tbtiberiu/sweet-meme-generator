import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = (props) => {
  return (
    <nav className={`${styles.NavLinks} ${props.dark ? styles.dark : null}`}>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName={styles.activeLink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/templates" activeClassName={styles.activeLink}>
            Templates
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.activeLink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/create-a-meme"
            className={props.buttonBackground ? styles.CreateAMemeButton : null}
            activeClassName={styles.activeCreateAMemeButton}
          >
            Create a meme {props.buttonBackground}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
