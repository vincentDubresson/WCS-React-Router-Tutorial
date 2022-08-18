/**
 * On a créer ici un dossier "route" pour y insérer toutes nos routes.
 * Ce n'est pas obligatoire mais cela rend l'organisation plus simple
 * si vous êtes ammené à développer un grosse application.
 */
import { NavLink, Outlet } from 'react-router-dom';
import { getInvoices } from '../datas/Invoices';

export default function Invoices() {
    /* Nous appelons ici la liste des factures enregistrées dans
        le fichier 'Invoices.js' */
    let invoices = getInvoices();

    return(
        <div
            style={{
                display: "flex",
                padding: "1rem 0"
            }}
        >
            <nav
            style={{
                borderRight: "solid 1px",
                padding: "1rem",
            }}
            >
            {/* La fonction map sert à créer un nouveau tableau à partir d'un tableau.
                    Ici, elle nous sert à transformer notre tableau de données en liens. */}
            {invoices.map((invoice) => (
                /* Ici, nous avons remplacé <Link /> par <NavLink /> dans le but de
                    dynamiser le style des liens en fonction de l'action de l'utilisateur */
                <NavLink
                style={({ isActive }) => {
                    return {
                        display: "block",
                        margin: "1rem 0",
                        color: isActive ? "red" : "",
                    }
                }}
                /* avec className pour utilisation dans un fichier CSS =>
                    className={({ isActive }) => isActive ? "red" : "blue"} */
                to={`/invoices/${invoice.number}`}
                key={invoice.number}
                >
                {invoice.name}
                </NavLink>
            ))}
            </nav>
            <Outlet />
      </div>
    );
}