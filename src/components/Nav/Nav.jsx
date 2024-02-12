import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/images/visuart.png";

function Nav() {
  return (
      <nav className="nav">
        <div className="logo-nav">
          <h1>Développer par</h1>
          <img src={logo} alt="Logo VisuArt" />
        </div>
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
