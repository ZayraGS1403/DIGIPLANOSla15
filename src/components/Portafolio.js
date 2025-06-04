import React, { useState, useEffect } from 'react';
import './Portafolio.css';

function Portafolio() {
  const whatsappNumber = "573007631490"; // Código de país Colombia + número
  const cotizacionMessage = "Hola, quiero solicitar una cotización para mis planos arquitectónicos - DIGIPLANOS la 15";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(cotizacionMessage)}`;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Hook para detectar el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(1); // Móvil: 1 imagen
      } else if (window.innerWidth <= 768) {
        setItemsPerPage(2); // Tablet: 2 imágenes
      } else {
        setItemsPerPage(3); // Desktop: 3 imágenes
      }
    };

    // Ejecutar al cargar y en cada cambio de tamaño
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Resetear index cuando cambia itemsPerPage
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const proyectos = [
    {
      id: 2,
      titulo: 'Diseño de Baños Modernos',
      descripcion: 'Renders de baños con diseños contemporáneos y funcionales',
      categoria: 'Renders 3D',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_7d160c60.jpg'
    },
    {
      id: 3,
      titulo: 'Planos Arquitectónicos',
      descripcion: 'Desarrollo de planos técnicos para viviendas familiares',
      categoria: 'Planos',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_87e43755.jpg'
    },
    {
      id: 5,
      titulo: 'Diseños de Casas en 3D',
      descripcion: 'Modelado completo de viviendas para visualización del cliente',
      categoria: 'Renders 3D',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_c34fc93f.jpg'
    },
    {
      id: 6,
      titulo: 'Planos Estructurales',
      descripcion: 'Desarrollo de planos estructurales y de cimentación',
      categoria: 'Planos',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_d1aa6ffa.jpg'
    },
    {
      id: 7,
      titulo: 'Renders de Interiores',
      descripcion: 'Diseños 3D de espacios interiores con iluminación natural',
      categoria: 'Renders 3D',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_cd7fa2b3.jpg'
    },
    {
      id: 8,
      titulo: 'Proyectos Residenciales',
      descripcion: 'Visualización completa de proyectos de vivienda',
      categoria: 'Renders 3D',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_81bf7af7.jpg'
    },
    {
      id: 9,
      titulo: 'Diseños Modernos',
      descripcion: 'Arquitectura contemporánea con acabados de primera',
      categoria: 'Renders 3D',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_c8e86ff7.jpg'
    },
    {
      id: 10,
      titulo: 'Espacios Funcionales',
      descripcion: 'Optimización de espacios con diseño funcional',
      categoria: 'Renders 3D',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_ba34ec73.jpg'
    },
    {
      id: 12,
      titulo: 'Diseños Personalizados',
      descripcion: 'Proyectos únicos adaptados a las necesidades del cliente',
      categoria: 'Renders 3D',
      imagen: '/images/Imagen de WhatsApp 2025-06-03 a las 14.50.56_288c02d2.jpg'
    }
  ];

  const totalPages = Math.ceil(proyectos.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const getCurrentProjects = () => {
    const startIndex = currentIndex * itemsPerPage;
    return proyectos.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section id="portafolio" className="seccion">
      <h2>Nuestros Trabajos</h2>
      <p>Conoce algunos de los proyectos que hemos realizado para nuestros clientes</p>
      
      <div className="carousel-container">
        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </button>

        <div className="carousel-content">
          <div className="carousel-slides">
            {getCurrentProjects().map(proyecto => (
              <div key={proyecto.id} className="carousel-item">
                <img 
                  src={proyecto.imagen} 
                  alt={proyecto.titulo}
                  className="carousel-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="carousel-fallback">
                  {proyecto.categoria}
                </div>
                
                <div className="carousel-item-content">
                  <h4>{proyecto.titulo}</h4>
                  <p>{proyecto.descripcion}</p>
                  <span className="carousel-category">
                    {proyecto.categoria}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </button>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p style={{ marginBottom: '1rem', fontStyle: 'italic', color: '#666' }}>
          ¿Quieres ver tu casa en 3D? ¡Comunícate con nosotros!
        </p>
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-primary whatsapp-cotizacion"
        >
          <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.891 3.688"/>
          </svg>
          Solicitar Cotización
        </a>
      </div>
    </section>
  );
}

export default Portafolio; 