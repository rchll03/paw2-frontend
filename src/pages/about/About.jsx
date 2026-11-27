import React from "react";
import { NavLink } from "react-router";

const About = () => {
  return (
    <div>
      <h1>ABOUT PAGE</h1>

      <NavLink to="/" className="btn btn-primary">
        GO TO ABOUT PAGE
      </NavLink>
    </div>
  );
};

export default About;
