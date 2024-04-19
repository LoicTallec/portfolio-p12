import React from 'react';
import "./card.css";

function Card({ src, alt, content="" }) {
    return (
        <figure className="card">
            <figcaption>{content}</figcaption>
            <img src={src} alt={alt} />
        </figure>
    );
}

export default Card;
