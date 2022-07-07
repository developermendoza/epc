import React from "react";
import styles from "./SectionHeader.module.css";

const SectionHeader = ({
  headline,
  headlineColor,
  subHeadline,
  isSubHeadlineBg,
  isAboutSection,
}) => {
  return (
    <div
      className={styles.section_header}
      style={{
        margin: isAboutSection && "0",
        textAlign: isAboutSection && "left",
        maxWidth: isAboutSection && "none",
      }}
    >
      <p
        className={`${styles.subheadline} ${
          isSubHeadlineBg ? styles.subheadline_bg : ""
        }`}
      >
        {subHeadline}
      </p>
      <h2
        className={styles.headline}
        style={{
          margin: isAboutSection && "10px 0 20px 0",
          color: headlineColor,
        }}
      >
        {headline}
      </h2>
    </div>
  );
};

export default SectionHeader;
