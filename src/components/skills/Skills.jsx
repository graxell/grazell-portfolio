import React from "react";
import SectionHeading from "../layout/SectionHeading";
import { skillsData } from "./skillsData";
import "./skillsStyles.css";

const Skills = () => {
  const { heading, skills } = skillsData;

  return (
    <>
      <div className="section__top" id="skills">
        <div className="outer--container">
          <SectionHeading heading={heading.title} />

          <div className="curly__bracket L__bracket">&#123;</div>

          <div className="skill__cards--container">
            {skills.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`skill__card ${item.background_color} shadow__darker`}
                >
                  <h3 className="skill__title">{item.title}</h3>
                  <img src={item.logo} className="skill__img" />
                </div>
              );
            })}
          </div>

          <div className="curly__bracket R__bracket">&#125;;</div>
        </div>
      </div>
    </>
  );
};

export default Skills;
