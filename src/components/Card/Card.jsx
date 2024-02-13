import React, { useState } from 'react';
import "./card.css";

function Card({ src, alt, content="" }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true); // Mettez à jour l'état lors du survol
    };

    const handleMouseLeave = () => {
        setIsHovered(false); // Mettez à jour l'état lors de la sortie du survol
    };

    return (
        <figure className={`card ${isHovered ? 'hovered' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <figcaption>{content}</figcaption>
            <img src={src} alt={alt} />
            
        </figure>
    );
}

export default Card;
