import React, { useState } from 'react';
import Card from './components/Card/Card'; // Importation du composant Card

const USERS = [
    {
        image: "https://picsum.photos/80",
        pseudo: 'Alice',
        email: 'alice@example.com',
        description: 'Frontend developer.',
        sexe: 'femme',
    },
    {
        image: "https://picsum.photos/70",
        pseudo: 'Bob',
        email: 'bob@example.com',
        description: 'Backend developer.',
        sexe: 'homme',
    },
    {
        image: "https://picsum.photos/60",
        pseudo: 'Charlie',
        email: 'charlie@example.com',
        description: 'Fullstack developer.',
        sexe: 'non-binaire',
    },
];

function App() {
    const [search, setSearch] = useState(''); // État pour la barre de recherche

    // Filtrer les utilisateurs selon la recherche
    const USERS_LIST = USERS.filter((user) =>
        user.pseudo.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <h1>
                {USERS_LIST.length > 0
                    ? 'Liste des Utilisateurs'
                    : 'Aucun utilisateur inscrit'}
            </h1>
            {USERS_LIST.length > 0 && (
                <p>Il y a {USERS_LIST.length} utilisateurs inscrits !</p>
            )}
            <input
                type="text"
                placeholder="Rechercher un pseudo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {USERS_LIST.map((user, index) => (
                <Card key={index} {...user} /> // Transmission des données utilisateur via props
            ))}
        </>
    );
}

export default App;
