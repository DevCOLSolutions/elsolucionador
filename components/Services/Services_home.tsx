'use client'
import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  emoji: string;
  description: string;
  link: string;
}

const ServicesSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'electricidad',
      name: 'Trabajos Eléctricos',
      emoji: '⚡',
      description: 'Instalación de redes, cableado estructurado, cambio de luminarias, balastos y remodelaciones LED.',
      link: '/servicios/electricidad'
    },
    {
      id: 'plomeria',
      name: 'Plomería',
      emoji: '🔧',
      description: 'Puntos hidráulicos, fugas de agua, sanitarios, lavamanos, tanques y todo lo relacionado con plomería.',
      link: '/servicios/plomeria'
    },
    {
      id: 'obra-civil',
      name: 'Obra Civil Menor',
      emoji: '🧱',
      description: 'Acabados obra blanca, instalación de drywall, resanes, pintura e impermeabilización de cubiertas.',
      link: '/servicios/obra-civil'
    },
    {
      id: 'trabajos-altura',
      name: 'Trabajos en Altura',
      emoji: '🏗️',
      description: 'Lavado de fachadas, cubiertas, siliconado de ventanas y limpieza de vidrios especializada.',
      link: '/servicios/trabajos-altura'
    },
    {
      id: 'ornamentacion',
      name: 'Ornamentación',
      emoji: '🔩',
      description: 'Puertas, rejas, cerramientos, estructuras, marquesinas, postes, barandas y trabajos especiales.',
      link: '/servicios/ornamentacion'
    },
    {
      id: 'trabajos-madera',
      name: 'Trabajos en Madera',
      emoji: '🪵',
      description: 'Cocinas integrales, centros de entretenimiento, closets abiertos y muebles a medida.',
      link: '/servicios/trabajos-madera'
    },
    {
      id: 'mantenimiento',
      name: 'Mantenimiento Integral',
      emoji: '🏢',
      description: 'Mantenimiento especializado de inmuebles residenciales y empresariales con garantía.',
      link: '/servicios/mantenimiento'
    },
    {
      id: 'emergencia',
      name: 'Emergencias 24/7',
      emoji: '🚨',
      description: 'Emergencias eléctricas y de plomería las 24 horas. Respuesta garantizada en 1 hora.',
      link: '/servicios/emergencia'
    }
  ];

  const handleServiceClick = (link: string) => {
    console.log(`Navegando a: ${link}`);
    // En Next.js sería: router.push(link);
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-10px) rotate(5deg); 
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
      
      <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-gray-100  overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header compacto */}
          <div className="text-center mb-10">
            <h2 className="text-4 xl md:text-4xl font-bold text-[#245565] mb-3 uppercase -tracking-wide">
              Conoce los <span className='text-[#d44d13]'>servicios</span> que ofrecemos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base mb-2">
              Soluciones completas para tu hogar con profesionales certificados
            </p>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-red-700 font-bold text-lg">
                🚨 EMERGENCIAS 24/7 - ATENCIÓN EN 1 HORA MÁXIMO 🚨
              </p>
            </div>
          </div>

          {/* Contenedor de servicios con animación */}
          <div className="relative">
            {/* Emojis flotantes animados */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {services.map((service, index) => (
                <div
                  key={`floating-${service.id}`}
                  className="absolute text-4xl opacity-10 animate-float"
                  style={{
                    left: `${(index * 15) % 90}%`,
                    top: `${(index * 20) % 80}%`,
                    animationDelay: `${index * 0.5}s`,
                    animationDuration: `${4 + (index % 3)}s`
                  }}
                >
                  {service.emoji}
                </div>
              ))}
            </div>

            {/* Grid de servicios responsive */}
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 max-w-5xl w-full px-2">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`
                      group relative bg-white  rounded-xl md:rounded-2xl 
                      p-3 md:p-6 cursor-pointer transition-all duration-300 hover:shadow-xl
                      border-2 md:border-4 border-gray-200 hover:border-[#d44d13]
                      ${hoveredService === service.id ? 'bg-gradient-to-br from-[#d44d13]/5 to-[#245565]/5' : ''}
                    `}
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                    onClick={() => handleServiceClick(service.link)}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Emoji responsivo */}
                    <div className="text-center mb-2 md:mb-4">
                      <span className="text-3xl md:text-6xl inline-block">
                        {service.emoji}
                      </span>
                    </div>

                    {/* Título compacto en móvil */}
                    <h3 className="text-sm md:text-lg font-bold text-[#245565] text-center mb-2 md:mb-4 group-hover:text-[#d44d13] transition-colors leading-tight">
                      {service.name}
                    </h3>

                    {/* Descripción solo en tablet/desktop */}
                    <div className="hidden md:flex h-16 items-center">
                      <p className="text-sm text-gray-600  text-center leading-tight">
                        {service.description}
                      </p>
                    </div>

                    {/* Botón de acción solo en hover en desktop */}
                    <div className={`
                      hidden md:flex justify-center mt-4 transition-opacity duration-300
                      ${hoveredService === service.id ? 'opacity-100' : 'opacity-0'}
                    `}>
                      <button className="flex items-center space-x-1 bg-[#d44d13] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#b8420f] transition-colors">
                        <a href='/servicios'>Ver más</a>
                        <ArrowRight size={14} />
                      </button>
                    </div>

                    {/* Indicador visual móvil */}
                    <div className="md:hidden absolute bottom-2 right-2 w-2 h-2 bg-[#d44d13] rounded-full opacity-60" />

                    {/* Indicador de hover desktop */}
                    <div className={`
                      hidden md:block absolute top-3 right-3 w-3 h-3 rounded-full transition-all duration-300
                      ${hoveredService === service.id ? 'bg-[#d44d13] scale-100' : 'bg-transparent scale-0'}
                    `} />
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action compacto */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center space-x-3 bg-[#d44d13] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b8420f] transition-all duration-300 cursor-pointer group">
                <Phone size={20} className="group-hover:animate-pulse" />
                <a href="tel:+573132841728">¿Necesitas ayuda inmediata o <b>tienes una emergencia?</b></a>
              </div>
            </div>  
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;