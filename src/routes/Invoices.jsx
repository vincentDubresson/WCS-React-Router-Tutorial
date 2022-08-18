/**
 * On a créer ici un dossier "route" pour y insérer toutes nos routes.
 * Ce n'est pas obligatoire mais cela rend l'organisation plus simple
 * si vous êtes ammené à développer un grosse application.
 */
import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { getInvoices } from '../datas/Invoices';

/* Cette fonction va nous servir à garder en mémoire l'état de la liste des
factures, même après avoir fait une recherche et cliqué sur le lien de la facture.
VOUS POUVEZ METTRE CETTE FONCTION N'IMPORTE OU ET L'EXPORTER */
function QueryNavLink({ to, ...props }) {
    let location = useLocation();
    return <NavLink to={to + location.search} {...props} />
}

export default function Invoices() {
    /* Nous appelons ici la liste des factures enregistrées dans
        le fichier 'Invoices.js' */
    let invoices = getInvoices();
    /* Nous créeons ici deux variables qui vont nous servir à filtrer nos résultats */
    let [searchParams, setSearchParams] = useSearchParams("");

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
                {/* Ici, nous rajoutons un input qui va nous servir à chercher des factures */}
                <input
                    type="text"
                    /* Ici, nous utilisons '.get()' pour passer la recherche en GET */
                    value={searchParams.get("filter") || ""}
                    onChange={(event) => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({filter});
                        } else {
                            setSearchParams({});
                        }
                    }}
                />

                {invoices
                    /* La fonction filter va nous permettre de filtrer les résultats en fonction
                        de ce que l'utilisateur a rentré dans l'input */
                    .filter((invoice) => {
                        let filter = searchParams.get("filter");
                        /* Si le champ est vide, tous les résultats sont affichés. */
                        if (!filter) return true;
                        let name = invoice.name.toLowerCase();
                        /* On affichera les résultats commençant par... */
                        return name.startsWith(filter.toLowerCase());
                    })
                    /* La fonction map sert à créer un nouveau tableau à partir d'un tableau.
                    Ici, elle nous sert à transformer notre tableau de données en liens. */
                    .map((invoice) => (
                    /* Ici, nous avons remplacé <Link /> par <NavLink /> dans le but de
                        dynamiser le style des liens en fonction de l'action de l'utilisateur */
                    /* EDIT : Nous avons remplacé <NavLink /> par <QueryNavLink /> dans le but
                        de garder en mémoire l'état de la liste des factures après avoir
                        fait une recherche et cliqué sur le lien */
                    <QueryNavLink
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
                    </QueryNavLink>
                ))}
            </nav>
            <Outlet />
      </div>
    );
}