import React from "react";
import Navigation from "./components/Navigation";
import Contacts from "./components/contacts/Contacts";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ga_logo_big from "./assets/logo/ga_logo_big.png";
import "./mediaQueryAndGeneralStyles/generalStyles.css";
import "./mediaQueryAndGeneralStyles/MediaQuery.css";

function App() {
  return (
    <div>
      <header className="header--container shadow__lighter">
        <h1 className="header__logo">
          <img src={ga_logo_big} alt="Website logo" />
        </h1>
        <Navigation />
      </header>

      <main className="main--container">
        <About />

        <Projects />

        <Skills />

        <Contacts />

        <div className="bottom--container">
          <p className="bottom__text">
            Please feel free to get in touch with me!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
