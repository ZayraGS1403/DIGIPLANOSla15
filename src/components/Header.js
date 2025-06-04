import React from 'react';

function Header() {
  const whatsappNumber = "573007631490";
  const defaultMessage = "Hola, quiero más información sobre sus servicios de DIGIPLANOS la 15";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <header className="App-header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src="/logo512.png" 
            alt="DIGIPLANOS la 15 Logo" 
            className="logo"
            onError={(e) => {
              // Fallback si la imagen no carga
              e.target.style.display = 'none';
            }}
          />
          <h1>DIGIPLANOS la 15</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#portafolio">Portafolio</a></li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contacto
              </a>
            </li>
            <li><a href="#ubicacion">Ubicación</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 