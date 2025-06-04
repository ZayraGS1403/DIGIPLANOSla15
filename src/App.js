import React from 'react';
import './App.css';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Servicios from './components/Servicios';
import Portafolio from './components/Portafolio';
import Contacto from './components/Contacto';
import Ubicacion from './components/Ubicacion';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      
      <main>
        <Inicio />
        <Servicios />
        <Portafolio />
        <Contacto />
        <Ubicacion />
      </main>

      <Footer />
    </div>
  );
}

export default App;
