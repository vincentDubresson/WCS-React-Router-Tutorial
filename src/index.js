import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Avant tout :
 *  - Installer le router : npm install react-router-dom@6
 * Puis :
 *  - Importer BrowserRouter directement dans l'index.
 *  - Importer les différentes routes.
 */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Invoices from './routes/Invoices';
import Expenses from './routes/Expenses';
import Invoice from './routes/Invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* Nous allons intégrer directement ici toutes les routes */}
    <Routes>
      <Route path="/" element={<App />}>
        {/* Nous imbriquons les routes filles afin d'éviter une répétition du code
            notamment pour la Navbar */}
        <Route path="invoices" element={<Invoices />}>
          {/* Ici, nous rajoutons une route 'index' qui affichera le contenu
              désiré lorsque nous afficherons la page. */}
          <Route
            index
            element={
              <div style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </div>
            }
          />
          {/* Ici, nous rajoutons une route enfant qui nous servira à afficher le
              détail d'une facture. ':invoiceId' est un param qui sera appelé grâce à
              la fonction useParam() dans le fichier 'invoice.jsx' */}
          <Route path=":invoiceId" element={<Invoice />}/>
        </Route>
        <Route path="expenses" element={<Expenses />} />
        {/* Ici, nous allons ajouter une route "sans correspondance" (fausse page "404 not found")
            qui s'affichera si une toute autre route que celle prédéfinie ci-dessus est appelée. */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem 0" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </Router>
);

