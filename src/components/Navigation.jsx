import React from "react";

const Navigation = () => {
  return (
    <>
      <nav className="nav--container">
        {/* NAVIGATION LINKS */}
        <ul className="nav__link--container">
          <li className="nav__link button__highlight">
            <a href="#about">About</a>
          </li>
          <li className="nav__link button__highlight">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav__link button__highlight">
            <a href="#skills">Skills</a>
          </li>
          <li className="nav__link button__highlight">Resume</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
