import React from "react";
import resume_pdf from "../assets/resumé/GrazellArgandaCV.pdf";

const Navigation = () => {
  return (
    <>
      <nav className="nav--container">
        {/* NAVIGATION LINKS */}
        <ul className="nav__link--container">
          <li className="nav__link">
            <a href="#about">About</a>
          </li>
          <li className="nav__link">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav__link">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav__link">
            <a href={resume_pdf} target="_blank">
              Resumé
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
