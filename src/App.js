import React from 'react';
import './App.css';

/**
 * On importe ci-dessous tous les composants qui seront intégrés à App()
 */
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <h1>Bookkeeper!</h1>
    </div>
  );
}
