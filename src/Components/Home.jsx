import React from "react";
import logo from "../Images/logo.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <img src={logo} alt="pc_image" />
        <div className="content">
          <h1>Hi, i'm Ankush kulkarni</h1>
          <p>I’m designing and creating amazing websites.</p>
          <NavLink exact to="/work">
            <button>Projects</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
