import React from "react";
import { GrLinkedinOption, GrTwitter } from "react-icons/gr";
import { IconContext } from "react-icons";

import styles from "./Social.module.css";
const Social = () => {
  return (
    <div>
      <a href="https://twitter.com/EPCPowerCorp" target="_blank">
        <div className={styles.social_icon_container}>
          <IconContext.Provider value={{ color: "#fff", size: "1.2em" }}>
            <GrTwitter />
          </IconContext.Provider>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/company/epc-power-corp-/"
        target="_blank"
      >
        <div className={styles.social_icon_container}>
          <IconContext.Provider value={{ color: "#fff", size: "1.2em" }}>
            <GrLinkedinOption />
          </IconContext.Provider>
        </div>
      </a>
    </div>
  );
};

export default Social;
