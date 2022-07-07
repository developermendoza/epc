import React from "react";
import { TiArrowRightThick } from "react-icons/ti";
import styles from "./NewsButton.module.css";

const NewsButton = () => {
  return (
    <button className={styles.news_button}>
      <div>
        <span>EXPLORE MORE</span>
        <TiArrowRightThick />
      </div>
    </button>
  );
};

export default NewsButton;
