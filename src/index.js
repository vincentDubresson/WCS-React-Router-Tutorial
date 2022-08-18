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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    {/* Nous allons intégrer directement ici toutes les routes */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/expenses" element={<Expenses />} />
    </Routes>
  </Router>
);

