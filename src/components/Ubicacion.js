import React from 'react';

function Ubicacion() {
  return (
    <section id="ubicacion" className="seccion">
      <h2>Ubicación</h2>
      <p>Estamos ubicados en:</p>
      <address>
        Carrera 15 # 6-92<br />
        Diagonal a la Registraduría<br />
        Aguachica, Cesar<br />
        Colombia
      </address>
      <div className="mapa">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.458963286147!2d-73.61331048520737!3d8.310864496830242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2ed6b6b6b6b6%3A0x1!2sCarrera%2015%20%236-92%2C%20Aguachica%2C%20Cesar%2C%20Colombia!5e0!3m2!1ses!2sco!4v1234567890!5m2!1ses!2sco"
          width="100%" 
          height="400" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación DIGIPLANOS la 15">
        </iframe>
      </div>
      
    </section>
  );
}

export default Ubicacion; 