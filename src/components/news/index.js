import React from "react";
import { SectionHeader } from "../../components";
import newsImage1 from "../../images/news1.png";
import newsImage2 from "../../images/news2.png";
import newsImage3 from "../../images/news3.png";
import { NewsCard } from "../../components";

import styles from "./News.module.css";

const news = {
  headline:
    "EVLO Energy Storage Inc. selects EPC Power Corp. Inverters for their Energy Storage Solutions",
  articles: [
    {
      id: "1",
      image: newsImage1,
      title: "Lorem Ipsum has been the industry's standard dummy",
      subtitle: "industry's standard dummy",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      subheadline: "when an unknown printer",
    },
    {
      id: "2",
      image: newsImage2,
      title: "Lorem Ipsum has been the industry's standard dummy",
      subtitle: "industry's standard dummy",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      subheadline: "when an unknown printer",
    },
    {
      id: "3",
      image: newsImage3,
      title: "Lorem Ipsum has been the industry's standard dummy",
      subtitle: "industry's standard dummy",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      subheadline: "when an unknown printer",
    },
  ],
};
const News = () => {
  return (
    <section className="section light-gray-bg">
      <div className="container">
        <SectionHeader
          headline={news.headline}
          subHeadline={news.subheadline}
          isSubHeadlineBg={false}
          headlineColor="#0B6582"
        />
        <div className={styles.news}>
          {news.articles.map((article) => (
            <NewsCard
              image={article.image}
              subtitle={article.subtitle}
              title={article.title}
              description={article.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
