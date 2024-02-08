import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/images/visuart.png";

function Nav() {
  return (
    <main>
      <nav className="nav">

          <h1>Portfolio par</h1>
          <img src={logo} alt="Logo Visuart" />

        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/visuart">Visuart</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

      </nav>
    </main>
  )
}

export default Nav;
