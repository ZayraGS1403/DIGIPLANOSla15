import React from 'react';

function Inicio() {
  return (
    <section id="inicio" className="seccion">
      <div className="hero-content">
        <h2>Bienvenidos a DIGIPLANOS la 15</h2>
        <p className="hero-description">
          Somos especialistas en impresión y digitalización de planos arquitectónicos y estructurales en Aguachica, Cesar.
        </p>
        <p className="hero-text">
          Con años de experiencia en el sector, ofrecemos servicios profesionales para arquitectos, ingenieros, constructoras y propietarios de viviendas. Nuestro compromiso es brindar soluciones de alta calidad con atención personalizada.
        </p>
        <div className="cta-buttons">
          <a href="#servicios" className="btn-primary">Nuestros Servicios</a>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image">
          {<img src="/images/logo192.png" alt="DIGIPLANOS la 15" />}
        </div>
      </div>
    </section>
  );
}

export default Inicio; 