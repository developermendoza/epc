import React from "react";
import { NewsButton } from "../../ui";
import styles from "./NewsCard.module.css";

const NewsCard = ({ image, subtitle, title, description }) => {
  return (
    <div className={styles.news_card}>
      <img src={image} alt="" />
      <div className={styles.news_card_info}>
        <p>{subtitle}</p>
        <p>{title}</p>
        <p>{description}</p>
        <NewsButton />
      </div>
    </div>
  );
};

export default NewsCard;
