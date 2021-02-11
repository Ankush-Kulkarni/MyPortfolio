import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <h1>Ankush kulkarni</h1>
        <div className="navlink">
          <NavLink className="homie" exact to="/">
            Home
          </NavLink>
          <NavLink className="workie" exact to="/work">
            Work
          </NavLink>
          <NavLink className="skillie" exact to="/skills">
            Skills
          </NavLink>
          <NavLink className="hirei" exact to="/hire">
            Hire
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Menu;
