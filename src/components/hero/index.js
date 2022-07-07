import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../images/hero.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_diagonal}></div>
      <div className="container">
        <div className={`${styles.hero_content}`}>
          <div className={styles.hero_text}>
            <h1 className={styles.fade_in_left_headline}>epc</h1>
            <h2 className={styles.fade_in_left_subheadline}>
              POWER ANYTIME, ANYWHERE
            </h2>
          </div>
          <div>
            <img
              className={styles.fade_in_right_image}
              src={heroImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
