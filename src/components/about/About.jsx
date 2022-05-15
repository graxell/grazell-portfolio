import React from "react";
import SectionHeading from "../layout/SectionHeading";
import { aboutData } from "./aboutData";

const About = () => {
  const { title, tag, p1, p2 } = aboutData;
  return (
    <>
      <div id="about" className="outer--container page__height">
        <div className="about__page">
          <div>
            <h3 className="about__heading ">{title}</h3>
          </div>
          <div className="curly__bracket L__bracket">&#123;</div>

          <div className="about__info--wrapper">
            <p className="about__info">{tag}</p>

            <p className="about__info">{p1}</p>

            <p className="about__info">{p2}</p>
          </div>

          <div className="curly__bracket R__bracket">&#125;,</div>
        </div>
      </div>
    </>
  );
};

export default About;
