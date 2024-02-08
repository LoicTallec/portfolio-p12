import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import logo from "../../assets/images/visuart.png";

function Nav() {
    return (
        <nav className="nav">
            <img src={logo} alt="Logo Visuart" />
        </nav>
    )
}

export default Nav;
