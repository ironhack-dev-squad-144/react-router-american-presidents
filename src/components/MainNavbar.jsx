import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNavbar() {
  return (
    <div className="MainNavbar">
      <span>React Presidents</span>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/list-presidents">Presidents</NavLink>
      </div>
      {/* <a href="#" className="MainNavbar__link MainNavbar__link--main">
        React Presidents
      </a>
      <a href="#" className="MainNavbar__link">
        About
      </a>
      <a href="#" className="MainNavbar__link">
        Presidents
      </a> */}
    </div>
  );
}
