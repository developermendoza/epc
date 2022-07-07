import React from "react";
import styles from "./ServiceCard.module.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Button } from "../../ui";
const ServiceCard = ({ title, description, tools, id }) => {
  return (
    <div className={styles.service_card} key={id}>
      <h4>{title}</h4>
      <hr />
      <p className={styles.service_card_description}>{description}</p>
      <div className={styles.service_card_tools}>
        {tools.map((tool) => (
          <div className={styles.service_card_tool}>
            <IconContext.Provider value={{ color: "#0B6582", size: "22px" }}>
              <AiFillCheckCircle />
            </IconContext.Provider>
            <p>{tool}</p>
          </div>
        ))}
      </div>
      <Button text="READ MORE" linkTo="/applications" />
    </div>
  );
};

export default ServiceCard;
