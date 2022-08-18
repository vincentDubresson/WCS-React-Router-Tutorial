/**
 * On a créer ici un dossier "route" pour y insérer toutes nos routes.
 * Ce n'est pas obligatoire mais cela rend l'organisation plus simple
 * si vous êtes ammené à développer un grosse application.
 */
import Navbar from "../components/Navbar";

export default function Expenses() {
    return(
        <main style={{ padding: "1rem 0" }}>
            <Navbar />
            <h2>Expenses</h2>
        </main>
    )
}