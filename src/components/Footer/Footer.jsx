import React from 'react';
import logo from '../../assets/images/visuart.webp';
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>Développer par</p>
            <img src={logo} alt="Logo VisuArt" />
        </footer>
    );
}

export default Footer;
