import React from "react";
import { SectionHeader } from "../../components";
import projectsImage from "../../images/projects.png";
import { Button } from "../../ui";
import styles from "./Projects.module.css";

const projects = {
  headline: "Proudly Made in the USA with Projects Worldwide ",
  subheadline: "when an unknown printer",
  description:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  image: projectsImage,
  otherDescriptions: [
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ",
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ",
  ],
};
const Projects = () => {
  return (
    <section className="section blue-bg">
      <div className="container">
        <div className={styles.projects_row1}>
          <div>
            <SectionHeader
              headline={projects.headline}
              subHeadline={projects.subheadline}
              isSubHeadlineBg={false}
              headlineColor="#fff"
            />
          </div>
          <div>
            <p>{projects.description}</p>
            <Button text="LEARN MORE" bgColor="#0FBA40" />
          </div>
        </div>
        <div className={styles.projects_row2}>
          <div>
            <img src={projects.image} alt="" />
          </div>
          <div>
            {projects.otherDescriptions.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
