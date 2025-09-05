'use client'
import React, { useState } from 'react';
import { Wrench, Zap, Hammer, Snowflake, Home, Truck, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const Servicios2 = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'plomeria',
      title: 'PLOMERÍA',
      icon: Wrench,
      description: 'Solucionamos todos tus problemas de plomería con técnicos especializados y herramientas profesionales.',
      features: [
        'Reparación de fugas y goteras',
        'Destape de tuberías y desagües',
        'Instalación y reparación de grifos',
        'Reparación de inodoros y cisternas',
        'Mantenimiento de sistemas de agua',
        'Emergencias 24/7'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'electricidad',
      title: 'ELECTRICIDAD',
      icon: Zap,
      description: 'Instalaciones y reparaciones eléctricas seguras con técnicos certificados.',
      features: [
        'Instalación de tomas y interruptores',
        'Reparación de cortocircuitos',
        'Instalación de lámparas y luminarias',
        'Revisión de tableros eléctricos',
        'Instalación de ventiladores',
        'Diagnóstico eléctrico completo'
      ],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'carpinteria',
      title: 'CARPINTERÍA',
      icon: Hammer,
      description: 'Trabajos de carpintería profesional para mejorar y reparar tus espacios.',
      features: [
        'Reparación de puertas y ventanas',
        'Instalación de muebles',
        'Trabajos en madera a medida',
        'Reparación de pisos de madera',
        'Instalación de closets y repisas',
        'Restauración de muebles'
      ],
      color: 'from-amber-600 to-yellow-700'
    },
    {
      id: 'aire',
      title: 'AIRES ACONDICIONADOS',
      icon: Snowflake,
      description: 'Instalación profesional de sistemas de climatización con garantía extendida.',
      features: [
        'Instalación de equipos split y ventana',
        'Mantenimiento preventivo',
        'Reparación de sistemas existentes',
        'Recarga de gas refrigerante',
        'Limpieza profunda de equipos',
        'Asesoría técnica especializada'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'remodelaciones',
      title: 'REMODELACIONES RÁPIDAS',
      icon: Home,
      description: 'Transformamos tus espacios con remodelaciones eficientes y de calidad.',
      features: [
        'Pintura interior y exterior',
        'Instalación de pisos',
        'Remodelación de baños',
        'Actualización de cocinas',
        'Instalación de drywall',
        'Trabajos de mampostería menor'
      ],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'express',
      title: 'ATENCIÓN EXPRESS',
      icon: Truck,
      description: 'Servicio inmediato donde y cuando lo necesites.',
      features: [
        'Respuesta en menos de 2 horas',
        'Servicio los 7 días de la semana',
        'Diagnóstico gratuito',
        'Presupuesto inmediato',
        'Garantía en todos los trabajos'
      ],
      color: 'from-red-500 to-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
         <section className="bg-amber-100 ">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 text-right">
                  <div className="mr-auto place-self-center lg:col-span-8">
                    <h1 className="max-w-2xl mb-4 text-4xl font-semibold md:text-4xl xl:text-6xl text-[#245565]">
                     
                      Nuestros Servicios<span className="text-[#d44d13]"> Especializados</span>
                    
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-lg ">
                     En El Solucionador Express ofrecemos una gama completa de servicios de mantenimiento y reparación diseñados para resolver tus necesidades de manera rápida y eficiente.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap justify-center gap-4 text-[#245565]">
                        <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                            <Shield className="w-5 h-5" />
                            <span>Con años de experiencia</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                            <Star className="w-5 h-5" />
                            <span>Materiales de calidad</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full">
                            <Clock className="w-5 h-5" />
                            <span>Emergencias en 1 hora</span>
                        </div>
                        </div>
                  </div>
                  
                  <div className="lg:mt-0 lg:col-span-4 lg:flex lg:justify-center lg:items-center">
                    <div className="relative w-70 h-70 mx-auto">
                      <Image
                        src="/logo.svg"
                        alt="Company logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
            </section>
     

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isSelected = selectedService === service.id;
            
            return (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  isSelected ? 'scale-105 z-10' : ''
                }`}
                onClick={() => setSelectedService(isSelected ? null : service.id)}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                <div  className={`
            bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500
            border-2 border-transparent hover:border-opacity-50
            ${isSelected ? 'shadow-2xl ring-4 ring-[#d44d13] ring-opacity-50 border-[#d44d13]' : ''}
          `}>
                  {/* Card Header */}
                  <div className={`
                    relative p-6 rounded-t-2xl text-white overflow-hidden
                    bg-gradient-to-r ${service.color}
                  `}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-white bg-opacity-20 rounded-xl text-[#245565]">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold">{service.title}</h3>
                      </div>
                      <p className="text-sm opacity-90 line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`
                    p-6 transition-all duration-500 overflow-hidden
                    ${isSelected ? 'max-h-96' : 'max-h-20'}
                  `}>
                    <div className={`
                      transition-opacity duration-300
                      ${isSelected ? 'opacity-100' : 'opacity-60'}
                    `}>
                      <h4 className="font-semibold text-gray-800 mb-3" style={{color: '#245565'}}>
                        Servicios incluidos:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: '#d44d13'}} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Expand Indicator */}
                  <div className="px-6 pb-4">
                    <div 
                      className="flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-lg transition-colors duration-300"
                      style={{
                        color: isSelected ? '#d44d13' : '#245565',
                        backgroundColor: isSelected ? '#d44d1310' : '#24556510'
                      }}
                    >
                      {isSelected ? 'Ver menos' : 'Ver detalles'}
                      <div className={`
                        w-4 h-4 transition-transform duration-300
                        ${isSelected ? 'rotate-180' : ''}
                      `}>
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            ¿Necesitas uno de nuestros servicios?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctanos ahora y recibe atención inmediata con la mejor calidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
            href='/contacto'
              className="px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              style={{backgroundColor: '#d44d13'}}
            >
              Solicitar Servicio
            </a>
            <button onClick={() => {
                window.location.href = "tel:+573132841728";
              }}
              className="px-8 py-4 text-white border-2 border-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-gray-800"
            >
              Llamar Ahora
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Servicios2;