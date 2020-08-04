import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

const Logo = (props) => {
  return (
    <h1 className={`${styles.Logo} ${props.dark ? styles.dark : null}`}>
      <Link to="/">SweetMemeGenerator</Link>
    </h1>
  );
};

export default Logo;
