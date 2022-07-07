import React from "react";
import styles from "./ProductCard.module.css";
const ProductCard = ({ image, title, isMain }) => {
  return (
    <div
      className={`${styles.product_card} ${isMain && styles.product_main_card}`}
    >
      <h3>{title}</h3>
      <img src={image} alt="" />
    </div>
  );
};

export default ProductCard;
