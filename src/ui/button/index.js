import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ text, bgColor, linkTo }) => {
  console.log("linkTo: ", linkTo);
  return (
    <Link to={linkTo ? linkTo : "/"}>
      <button style={{ backgroundColor: bgColor }} className={styles.button}>
        {text}
      </button>
    </Link>
  );
};

export default Button;
