/**
 * Création d'un composant <Navbar /> pour décharger au mieux <App />
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
        >
            {/* |{" "} : Sert à faire un retour à la ligne. Idem que <br/> en HTML 
                En Inline, cela rajoutera un espace */}
            <Link to="/">Home</Link> |{" "}
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>
        </nav>
    )
}