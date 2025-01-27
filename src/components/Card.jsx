import './Card.css';

function Card({ image, pseudo, email, description, sexe }) {
    // Définir la couleur du fond selon le sexe
    const backgroundColor = sexe === "homme" ? "lightblue" 
                        : sexe === "femme" ? "pink" 
                        : "lemonchiffon";

    return (
        <article className="card" style={{ backgroundColor }}>
            <img src={image} alt={`${pseudo} profile`} />
            <h2>{pseudo}</h2>
            <h3>{email}</h3>
            <p>{description}</p>
        </article>
    );
}

export default Card;
