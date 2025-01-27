import './App.css'

import Card from './components/Card';

const USERS = [
    {
        image: "https://picsum.photos/100",
        pseudo: "Jean Dupont",
        email: "jean.dupont@example.com",
        description: "Développeur passionné par React.",
        sexe: "homme"
    },
    {
        image: "https://picsum.photos/101",
        pseudo: "Marie Curie",
        email: "marie.curie@example.com",
        description: "Scientifique spécialisée en physique.",
        sexe: "femme"
    },
    {
        image: "https://picsum.photos/102",
        pseudo: "Alex Taylor",
        email: "alex.taylor@example.com",
        description: "Designer UI/UX.",
        sexe: "non-binaire"
    },
    {
        image: "https://picsum.photos/100",
        pseudo: "Jean Tuch",
        email: "jean.dupont@example.com",
        description: "Développeur passionné par React.",
        sexe: "homme"
    },
    {
        image: "https://picsum.photos/101",
        pseudo: "Marie Dupont",
        email: "marie.curie@example.com",
        description: "Scientifique spécialisée en physique.",
        sexe: "femme"
    },
    {
        image: "https://picsum.photos/102",
        pseudo: "Tom Taylor",
        email: "alex.taylor@example.com",
        description: "Designer UI/UX.",
        sexe: "non-binaire"
    }
];

function App() {
    return (
        <>
            <h1>{USERS.length > 0 ? "Liste des Utilisateurs" : "Aucun utilisateur d’inscrit"}</h1>
            {USERS.length > 0 && <p>Il y a {USERS.length} utilisateurs inscrits !</p>}
            <div>
                {USERS.map((user, index) => (
                    <Card
                        key={index}
                        image={user.image}
                        pseudo={user.pseudo}
                        email={user.email}
                        description={user.description}
                        sexe={user.sexe}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
