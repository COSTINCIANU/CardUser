import React, { useState } from 'react';
import Like from '../Like/Like'; // Importation du composant Like
import './Card.css'; // Importation du CSS

function Card({ image, pseudo, email, description, sexe }) {
    const [isHovered, setIsHovered] = useState(false);

    // Déterminez la couleur de fond en fonction du sexe
    const backgroundColor = sexe === 'homme'
        ? 'lightblue'
        : sexe === 'femme'
        ? 'pink'
        : 'lemonchiffon';

    return (
        <article
            className={`card ${isHovered ? 'border' : ''}`}
            style={{ backgroundColor }}
            onMouseOver={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image} alt={`${pseudo}'s profile`} />
            <h2>{pseudo}</h2>
            <h3>{email}</h3>
            <p>{description}</p>
            <Like /> {/* Intégration du composant Like */}
        </article>
    );
}

export default Card;
