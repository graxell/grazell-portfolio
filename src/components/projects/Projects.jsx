import React from "react";
import { projectsData } from "./projectsData";
import github_icon from "../../assets/skillsIcon/github.png";
import link_icon from "../../assets/logo/link.png";

const Projects = () => {
  const { heading, projects } = projectsData;
  return (
    <>
      <div id="projects" className="outer--container">
        {/* HEADING */}
        <div className="heading--container shadow__lighter">
          <h2>{heading.title}</h2>
        </div>

        <div className="curly__bracket L__bracket">&#123;</div>

        {/* PROJECT CARDS CONTAINER */}
        <div className="project__cards--container">
          {projects.map((item, index) => {
            const {
              title,
              image,
              description,
              background_color,
              tag,
              technology,
              link,
              github,
            } = item;
            return (
              // INDIVIDUAL PROJECT CARD
              <div
                key={index}
                className={`project__card ${background_color} shadow__darker`}
              >
                <div className="project__info">
                  <h3>
                    {title} <span>{tag}</span>
                  </h3>

                  <p className="project__description">{description}</p>

                  <ul className="project__tech">
                    {technology.map((item) => {
                      return <li className="project__tech--item">{item}</li>;
                    })}
                  </ul>

                  <div className="project__links">
                    <img
                      src={github_icon}
                      onClick={() => window.open(github)}
                    />

                    <img src={link_icon} onClick={() => window.open(link)} />
                  </div>
                </div>

                <div className="project__img--wrapper">
                  <img src={image} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="curly__bracket R__bracket">&#125;</div>
      </div>
    </>
  );
};

export default Projects;
