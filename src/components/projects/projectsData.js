import trailerflix from "../../assets/projectsImg/trailerflix.png";
import simpsons_quotes from "../../assets/projectsImg/simpsons_quotes.png";
import recreating_leuchtturm1917 from "../../assets/projectsImg/recreating_leuchtturm1917.png";
import event_timer from "../../assets/projectsImg/event_timer.png";

export const projectsData = {
  heading: {
    title: "Projects",
  },

  projects: [
    {
      title: "Trailerflix",
      tag: "FullStack",
      image: trailerflix,
      background_color: "green",
      description:
        " This is a re-creation of Netflix, using TMDB's large movie and series database. Users can explore shows and their trailers with features including search engine, saving shows, and creating an account with up to five profiles. ",
      technology: [
        "React",
        "JavaScript",
        "CSS",
        "Express",
        "Bcrypt",
        "MySQL",
        "RESTFul",
        "NodeJS",
      ],
      link: "https://trailer-flix.netlify.app",
      github: "https://github.com/graxell/trailerflix",
    },
    {
      title: "The Simpsons Quotes",
      tag: "Front-end [React]",
      image: simpsons_quotes,
      background_color: "lightBlue",
      description:
        "This is my first project in react using class components. It fetches 20 Simpsons quotes from the API, that the users can then filter or delete. The app also features a button that generates new set of quotes.",
      technology: ["React", "JavaScript", "CSS"],
      link: "thesimpsons-quotes.netlify.app",
      github: "https://github.com/graxell/simpsons-quotes",
    },
    {
      title: "Leuchtturm1917",
      tag: "Front-end [Homage Website]",
      image: recreating_leuchtturm1917,
      background_color: "yellow",
      description:
        "This is a recreation of the Leuchtturm1917 homepage using pure HTML and CSS. I used a variety of CSS features in creating this project, including flexbox and grid to have a well structured and consistent page.",
      technology: ["HTML5", "CSS"],
      link: "recreating-leuchtturm1917.netlify.app",
      github: "https://github.com/graxell/recreating-leuchtturm1917",
    },
    {
      title: "Anti-divorce Timer",
      tag: "Hackathon [teamwork]",
      image: event_timer,
      background_color: "orange",
      description:
        "The challenge for this hackathon was to create an app that reminds its user of important events. ",
      technology: ["JavaScript", "React", "CSS"],
      link: "russells-anti-divorce-timer.netlify.app",
      github: "https://github.com/snowdog773/ch9hackathon",
    },
  ],
};
