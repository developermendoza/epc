import React from "react";
import styles from "./Copyright.module.css";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <small>
        Copyright © 2022 <span>EPC Power Corporation.</span> All rights
        reserved.
      </small>
    </div>
  );
};

export default Copyright;
