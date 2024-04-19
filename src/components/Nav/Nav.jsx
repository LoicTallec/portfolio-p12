import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/images/visuart.webp";

function Nav() {
  return (
      <nav className="nav">
          <img src={logo} alt="Logo VisuArt" className="logo-nav"/>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <a href="http://visuart.net" target="_blank" rel="noopener noreferrer">VisuArt</a>
          </li>
        </ul>

      </nav>
  )
}

export default Nav;
