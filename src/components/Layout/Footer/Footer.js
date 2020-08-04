import React from "react";
import styles from "./Footer.module.css";

import Logo from "../../Logo/Logo";
import NavLinks from "../../NavLinks/NavLinks";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <NavLinks dark />
      <Logo dark />
    </footer>
  );
};

export default Footer;
