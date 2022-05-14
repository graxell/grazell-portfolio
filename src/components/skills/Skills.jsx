import React from "react";
import { skillsData } from "./skillsData";

const Skills = () => {
  const { heading, skills } = skillsData;

  return (
    <>
      <div id="skills" className="outer--container">
        <div className="heading--container shadow__lighter">
          <h2>{heading.title}</h2>
        </div>

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
      </div>
    </>
  );
};

export default Skills;
