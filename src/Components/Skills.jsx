import React from "react";
import html from "../Images/html.jpg";
import css from "../Images/css.png";
import reactImage from "../Images/reactImage.png";
import Javascript from "../Images/Javascript.png";
import sass from "../Images/sass.png";
import redux from "../Images/redux.jpg";

const Skills = () => {
  return (
    <>
      <div className="skills">
        <h1>Skills</h1>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={Javascript} alt="js" />
        <img src={reactImage} alt="Waste" />
        <img src={sass} alt="sass" />
        <img src={redux} alt="redux" />
      </div>
    </>
  );
};

export default Skills;
