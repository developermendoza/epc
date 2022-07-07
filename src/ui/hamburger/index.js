import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import styles from "./Hamburger.module.css";
const Hamburger = ({ icon }) => {
  return (
    <div className={styles.hamburger}>
      {icon === "close" ? <GrFormClose /> : <GiHamburgerMenu />}
    </div>
  );
};

export default Hamburger;
