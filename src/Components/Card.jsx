import React from "react";
import reactImage from "../Images/reactImage.png";

const Card = (props) => {
  return (
    <>
      <a href={props.link}>
        <div className="card">
          <img src={reactImage} alt="waste" />
          <div className="container">
            <h2>Weather</h2>
            <p>Get the Weather details accurately</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
