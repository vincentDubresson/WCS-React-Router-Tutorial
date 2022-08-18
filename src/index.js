import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * Avant tout :
 *  - Installer le router : npm install react-router-dom@6
 *  - Importer BrowserRouter directement dans l'index
 *  - Entourer <App /> des balises <Router />
 */
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

