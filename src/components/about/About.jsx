import React from "react";
import { aboutData } from "./aboutData";

const About = () => {
  const { title, tag, p1, p2 } = aboutData;
  return (
    <>
      <div id="about" className="about--container">
        <div className="about__page">
          <h3 className="about__heading">{title}</h3>
          <div className="curly__bracket L__bracket">&#123;</div>

          <p className="about__info info__top">{tag}</p>

          <p className="about__info info__middle">{p1}</p>

          <p className="about__info bottom">{p2}</p>

          <div className="curly__bracket R__bracket">&#125;</div>
        </div>
      </div>
    </>
  );
};

export default About;
