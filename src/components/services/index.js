import React from "react";
import { SectionHeader, ServiceCard } from "../../components";
import styles from "./Services.module.css";

const services = {
  headline:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  subheadline: "when an unknown printer",
  service: [
    {
      id: "1",
      title: "Compact & Flexible Design",
      description:
        " EPC Inverters have a small footprint and modular design, providing high power density and ease of integration into any system.",
      tools: [
        " It was popularised ",
        " It was popularised ",
        " It was popularised ",
      ],
    },
    {
      id: "2",
      title: "Grid-Forming",
      description:
        "Industry leading performance to seamlessly provide a reliable grid.",
      tools: [
        " It was popularised ",
        " It was popularised ",
        " It was popularised ",
      ],
    },
    {
      id: "3",
      title: "Response Time",
      description:
        "EPC Power inverters have a 10X faster response time than the industry standard. Stay online in the most mission critical situations.",
      tools: [
        " It was popularised ",
        " It was popularised ",
        " It was popularised ",
      ],
    },
  ],
};
const Services = () => {
  return (
    <section className="light-gray-bg section">
      <div className="container">
        <SectionHeader
          isSubHeadlineBg={false}
          headline={services.headline}
          subHeadline={services.subheadline}
          headlineColor="#0B6582"
        />
        <div className={styles.services}>
          {services.service.map((item) => (
            <ServiceCard
              tools={item.tools}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
