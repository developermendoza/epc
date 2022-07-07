import React from "react";
import styles from "./NavButton.module.css";
import { TiArrowRightThick } from "react-icons/ti";
import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <Link to="/contact">
      <button className={styles.nav_button}>
        <p>Contact us</p>
        <TiArrowRightThick value={{ style: { verticalAlign: "middle" } }} />
      </button>
    </Link>
  );
};

export default NavButton;
