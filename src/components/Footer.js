import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} DIGIPLANOS la 15 - Todos los derechos reservados</p>
      <p>Carrera 15 # 6-92, Aguachica, Cesar, Colombia</p>
      <p>Teléfonos: 304 332 3095 - 300 763 1490</p>
      <div className="redes-sociales">
        <a href="https://www.facebook.com/DIGILA15/" target="_blank" rel="noopener noreferrer">
          <img 
            src="/images/facebookIcon.png" 
            alt="Facebook" 
            className="facebook-icon"
          />
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer; 