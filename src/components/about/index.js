import React from "react";
import aboutImage from "../../images/about.png";
import { SectionHeader } from "../../components";
import styles from "./About.module.css";
import { Button } from "../../ui";

const About = () => {
  const about = {
    headline:
      "EPC Power creates innovative power conversion products that are stable, powerful and smaller than you ever thought possible",
    subHeadline: "Appliances, Electrical, and Electronics Manufacturing",
    p1: " Our field of excellence is the development of globally competitive high power density electrical conversion systems with a power range of several kilowatts to 200 megawatts.",
    p2: "Based in San Diego, EPC Power engineers and manufactures fully functional designs, prototypes, production hardware, and commercialized power electronics technology for use around the world.",
  };
  return (
    <section className={`${styles.about} section`}>
      <div className="container">
        <div className={styles.about_content}>
          <div className={styles.about_image}>
            <div className={styles.about_image_popup}>
              <h3>Power Conversion</h3>
              <p>For almost any environment</p>
            </div>
            <img src={aboutImage} alt="" />
          </div>
          <div className={styles.about_text}>
            <div className={styles.about_header}>
              <SectionHeader
                headline={about.headline}
                headlineColor="#0B6582"
                subHeadline={about.subHeadline}
                isSubHeadlineBg={true}
                isAboutSection={true}
              />
            </div>
            <div>
              <p className={styles.about_p1}>{about.p1}</p>
              <p className={styles.about_p2}>{about.p2}</p>
            </div>
            <div className={styles.about_button}>
              <Button text="LEARN MORE" linkTo="/company" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
