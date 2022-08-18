import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
/**
 * On importe ci-dessous tous les composants qui seront intégrés à App()
 */
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div style={{ padding: "1rem 0" }}>
      <h1>Bookkeeper!</h1>
      <Navbar />
      {/* Ici, Outlet sert à afficher les routes enfants
          tout en gardant le contenu du parent ! */}
      <Outlet />
    </div>
  );
}
