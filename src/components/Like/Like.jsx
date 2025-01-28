import React, { useState } from 'react';
import './Like.css'; // Importation du CSS

function Like() {
    const [like, setLike] = useState(42); // État pour le nombre de likes

    const handleClick = (event) => {
        event.target.classList.toggle('like'); // Ajout/suppression de la classe CSS
        if (event.target.classList.contains('like')) {
            setLike(like + 1); // Augmente les likes
        } else {
            setLike(like - 1); // Diminue les likes
        }
    };

    return (
        <div>
            <div
                className="like-button"
                onClick={(event) => handleClick(event)}
            ></div>
            <p>{like} likes</p>
        </div>
    );
}

export default Like;
