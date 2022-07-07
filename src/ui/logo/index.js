import React from "react";
import logo from "../../images/logo.png";
import styles from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} />
    </div>
  );
};

export default Logo;
