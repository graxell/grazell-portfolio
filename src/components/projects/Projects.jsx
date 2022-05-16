import React from "react";
import SectionHeading from "../layout/SectionHeading";
import { projectsData } from "./projectsData";
import github_icon from "../../assets/skillsIcon/github.png";
import link_icon from "../../assets/logo/link.png";
import "./projectStyles.css";

const Projects = () => {
  const { heading, projects } = projectsData;
  return (
    <>
      <div id="projects" className="outer--container">
        {/* HEADING */}
        <SectionHeading heading={heading.title} />

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
              live,
              github,
            } = item;
            return (
              // INDIVIDUAL PROJECT CARD
              <div
                key={index}
                className={`project__card ${background_color} shadow__darker`}
              >
                <div className="project__info">
                  {/* title */}
                  <h3>
                    {title} <span>{tag}</span>
                  </h3>

                  {/* description */}
                  <p className="project__description">{description}</p>

                  {/* tech list */}
                  <ul className="project__tech">
                    {technology.map((item) => {
                      return <li className="project__tech--item">{item}</li>;
                    })}
                  </ul>

                  {/* links */}
                  <div className="project__links">
                    <button
                      className="link__btn shadow__darker"
                      onClick={() => window.open(github)}
                    >
                      <img src={github_icon} />
                      GitHub
                    </button>

                    <button
                      className="link__btn shadow__darker"
                      onClick={() => window.open(live)}
                    >
                      <img src={link_icon} />
                      Live
                    </button>
                  </div>
                </div>

                <div className="project__img--wrapper">
                  <img src={image} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="curly__bracket R__bracket">&#125;,</div>
      </div>
    </>
  );
};

export default Projects;
