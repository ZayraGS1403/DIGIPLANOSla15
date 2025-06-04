import React from 'react';

function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: 'Diseños Arquitectónicos',
      descripcion: 'Desarrollamos diseños arquitectónicos personalizados según tus necesidades.'
    },
    {
      id: 2,
      titulo: 'Reconocimiento de Mejoras',
      descripcion: 'Servicios de reconocimiento y evaluación de mejoras en viviendas.'
    },
    {
      id: 3,
      titulo: 'Avalúos Urbanos y Rurales',
      descripcion: 'Realizamos avalúos técnicos para predios urbanos y rurales.'
    },
    {
      id: 4,
      titulo: 'Desenglobes Urbanos y Rurales',
      descripcion: 'Servicios de desenglobes para la división de predios urbanos y rurales.'
    },
    {
      id: 5,
      titulo: 'Impresión de Planos',
      descripcion: 'Impresión de alta calidad para todo tipo de planos arquitectónicos y estructurales.'
    },
    {
      id: 6,
      titulo: 'Digitalización de Planos',
      descripcion: 'Convertimos tus planos físicos a formato digital con precisión y calidad.'
    },
    {
      id: 7,
      titulo: 'Renders en HD',
      descripcion: 'Realizamos renders en alta definición para visualizar tus proyectos arquitectónicos.'
    },
    {
      id: 8,
      titulo: 'Legalizaciones de Predios',
      descripcion: 'Te ayudamos con el proceso de legalización de tus predios.'
    },
    {
      id: 9,
      titulo: 'Reglamentos de Propiedad Horizontal',
      descripcion: 'Elaboración de reglamentos para propiedad horizontal.'
    },
    {
      id: 10,
      titulo: 'Reconocimiento de Vivienda',
      descripcion: 'Servicios de reconocimiento para tu vivienda.'
    }
  ];

  return (
    <section id="servicios" className="seccion">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {servicios.map(servicio => (
          <div key={servicio.id} className="servicio-card">
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios; 