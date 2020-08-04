import React from "react";
import styles from "./Navbar.module.css";

import NavLinks from "../../NavLinks/NavLinks";
import Logo from "../../Logo/Logo";

const Navbar = () => {
  return (
    <header className={styles.Navbar}>
      <Logo />
      <NavLinks buttonBackground />
    </header>
  );
};

export default Navbar;
