import React from "react";
import product1 from "../../images/product1.png";
import product2 from "../../images/product2.png";
import product3 from "../../images/product3.png";
import product4 from "../../images/product4.png";
import { ProductCard } from "../../components";
import styles from "./Products.module.css";

const products = [
  {
    id: "1",
    title: "CAB1000 Utility Grade Storage Inverter Scalable from 1 to 6 MW",
    image: product1,
    main: true,
  },
  {
    id: "1",
    title: "CAB1000 Utility Grade Storage Inverter Scalable from 1 to 6 MW",
    image: product2,
    main: false,
  },
  {
    id: "1",
    title: "CAB1000 Utility Grade Storage Inverter Scalable from 1 to 6 MW",
    image: product3,
    main: false,
  },
  {
    id: "1",
    title: "CAB1000 Utility Grade Storage Inverter Scalable from 1 to 6 MW",
    image: product4,
    main: false,
  },
];
const Products = () => {
  return (
    <section className={`section ${styles.products_section}`}>
      <div className="container">
        <h2>Our Products</h2>
        <div className={styles.products}>
          <div className={styles.products_row1}>
            {products.map(
              (product) =>
                product.main === true && (
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    isMain={product.main}
                  />
                )
            )}
          </div>
          <div className={styles.products_row2}>
            {products.map(
              (product) =>
                product.main === false && (
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    isMain={product.main}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
