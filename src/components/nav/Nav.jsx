import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
function Navbar() {
    return (
        <div className="navigation-bar">
            <Link className="navigation-link" to="/">Page d'accueil</Link>
            <Link className="navigation-link" to="/minigame">Mini jeux</Link>
            <Link className="navigation-link" to="/memorycard">Memory card game</Link>
            <Link className="navigation-link" to="/usefullinks">Liens utiles</Link>

        </div>
    )
}
export default Navbar