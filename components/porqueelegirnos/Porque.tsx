'use client'
import React, { useState, useEffect } from 'react';
import { Star, Clock, Shield, DollarSign, Wrench, CheckCircle, Award, Zap, Phone } from 'lucide-react';
import Image from 'next/image';
import { 
  Users, 
} from 'lucide-react';

const PorqueElegirnos: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const beneficios = [
    {
      title: 'ATENCIÓN RÁPIDA Y GARANTIZADA',
      icon: <Zap className="w-8 h-8" />,
      description: 'Tu emergencia es nuestra prioridad. Ofrecemos respuesta inmediata con tiempos de llegada que respetan tu agenda. Cada servicio viene con garantía por escrito porque confiamos en la calidad de nuestro trabajo.',
      color: 'from-orange-500 to-red-500',
      stats: '< 1 hora',
      statLabel: 'Tiempo de respuesta'
    },
    {
      title: 'PERSONAL CALIFICADO Y CONFIABLE',
      icon: <Users className="w-8 h-8" />,
      description: 'Soy un técnico certificado con años de experiencia en el sector. Mi trabajo está respaldado por capacitación continua y un compromiso total con la calidad del servicio.',
      color: 'from-blue-500 to-teal-600',
      stats: '10+ años',
      statLabel: 'Experiencia acumulada'
    },
    {
      title: 'PRESUPUESTOS CLAROS Y TRANSPARENTES',
      icon: <DollarSign className="w-8 h-8" />,
      description: 'Nada de sorpresas ni costos ocultos. Antes de iniciar cualquier trabajo, te proporcionamos un presupuesto detallado y claro.',
      color: 'from-green-500 to-emerald-600',
      stats: '0%',
      statLabel: 'Costos ocultos'
    },
    {
      title: 'SOPORTE POST-SERVICIO',
      icon: <Shield className="w-8 h-8" />,
      description: 'Nuestro compromiso no termina cuando finalizamos el trabajo. Ofrecemos soporte continuo y garantía en todos nuestros servicios.',
      color: 'from-purple-500 to-indigo-600',
      stats: '12 meses',
      statLabel: 'Garantía extendida'
    }
  ];

  const procesoPasos = [
    { numero: 1, titulo: 'Nos contactas', descripcion: 'Llámanos o escríbenos', icon: <Phone className="w-6 h-6" /> },
    { numero: 2, titulo: 'Evaluamos', descripcion: 'Analizamos tu necesidad', icon: <Clock className="w-6 h-6" /> },
    { numero: 3, titulo: 'Presupuesto', descripcion: 'Te damos cotización clara', icon: <DollarSign className="w-6 h-6" /> },
    { numero: 4, titulo: 'Ejecutamos', descripcion: 'Realizamos el trabajo', icon: <Wrench className="w-6 h-6" /> },
    { numero: 5, titulo: 'Garantizamos', descripcion: 'Aseguramos tu satisfacción', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const testimonios = [
    {
      texto: "El Solucionador Express salvó mi día cuando se dañó la plomería de mi oficina. Llegaron en menos de una hora y solucionaron todo.",
      autor: "María González",
      cargo: "Gerente de Oficina",
      rating: 5
    },
    {
      texto: "Profesionales, puntuales y con precios justos. Han sido mi primera opción para todos los arreglos de mi hogar.",
      autor: "Carlos Rodríguez",
      cargo: "Propietario",
      rating: 5
    }
  ];

  return (
    <div className=" bg-white">
      {/* Hero Section */}
    <section className="bg-amber-100 dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 text-right">
          <div className="mr-auto place-self-center lg:col-span-8">
            <h1 className="max-w-2xl mb-4 text-4xl font-semibold md:text-4xl xl:text-6xl text-[#245565] dark:text-white">
             
              ¿Por qué elegir <span className="text-[#d44d13]">El Solucionador Express?</span>
            
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
              Desde emergencias de plomería hasta electricidad y obras, clientes residenciales y empresas confían en El Solucionador Express para soluciones rápidas y confiables.
            </p>
            
           
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

    <section className="mx-auto px-4 ">
        <div className=" p-8">
            <section className="max-w-6xl mx-auto">
                                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {beneficios.map((beneficio, index) => (
                    <div
                    key={index}
                    className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 ${
                        activeCard === index ? 'ring-4 ring-blue-200 scale-105' : ''
                    }`}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                    >
                    {/* Header con gradiente e icono */}
                    <div className={`relative h-20 bg-gradient-to-br ${beneficio.color} overflow-hidden`}>
                        {/* Patrón decorativo */}
                        <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/30"></div>
                        <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/30"></div>
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-white/30"></div>
                        </div>
                        
                        {/* Icono principal */}
                        <div className="absolute top-3 left-6 p-3 bg-white/20 backdrop-blur-sm rounded-2xl transform group-hover:scale-110 transition-transform duration-300">
                        <div className="text-white">
                            {beneficio.icon}
                        </div>
                        </div>
                        
                        {/* Efecto de brillo */}
                        <div className="absolute -top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:animate-pulse group-hover:left-full transition-all duration-1000"></div>
                    </div>

                    {/* Contenido */}
                    <div className="p-8 space-y-4">
                        <h3 className="text-xl font-bold text-[#245565] group-hover:text-[#d44d13] transition-colors duration-300">
                        {beneficio.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                        {beneficio.description}
                        </p>
                        
                    </div>

                    {/* Fondo animado sutil */}
                    <div className={`absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none`}></div>
                    </div>
                ))}
                </div>
            </section>
        </div>
    </section>
    
                
    
    {/* SECCIÓN DE TESTIMONIOS MEJORADA */}
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 overflow-hidden">
    {/* Elementos decorativos de fondo */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-[#245565]/8 to-[#d44d13]/8 rounded-full blur-3xl transform -translate-x-36 -translate-y-36"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#d44d13]/6 to-[#245565]/6 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
    <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#245565]/4 to-[#d44d13]/4 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>

    <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-[#245565] mb-4">
            Lo Que Dicen Nuestros Clientes
            </h2>
            <div className="w-40 h-1 bg-gradient-to-r from-[#245565] to-[#d44d13] mx-auto rounded-full mb-4"></div>
        </div>
        <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Testimonios reales de personas <span className="text-[#d44d13] font-semibold">satisfechas</span> con nuestro servicio
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonios.map((testimonio, index) => (
            <div key={index} className="group relative">
            {/* Efecto de fondo animado */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                index % 2 === 0 ? 'from-[#245565]/5 to-[#d44d13]/5' : 'from-[#d44d13]/5 to-[#245565]/5'
            } opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-105`}></div>
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-white">
                <div className="space-y-6">
                {/* Rating con efecto mejorado */}
                <div className="flex space-x-1">
                    {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#d44d13] text-[#d44d13] transform group-hover:scale-110 transition-all duration-300" style={{transitionDelay: `${i * 100}ms`}} />
                    ))}
                </div>
                
                {/* Comillas decorativas */}
                <div className="relative">
                    <div className={`absolute -top-4 -left-2 text-6xl ${
                    index % 2 === 0 ? 'text-[#245565]' : 'text-[#d44d13]'
                    }/20 font-serif`}>"</div>
                    
                    {/* Testimonio */}
                    <blockquote className="text-gray-700 text-lg italic leading-relaxed relative z-10 pl-6">
                    {testimonio.texto}
                    </blockquote>
                    
                    <div className={`absolute -bottom-2 -right-2 text-6xl ${
                    index % 2 === 0 ? 'text-[#245565]' : 'text-[#d44d13]'
                    }/20 font-serif rotate-180`}>"</div>
                </div>
                
                {/* Información del cliente mejorada */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                    <div className={`w-14 h-14 bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-[#245565] to-[#2a6476]' : 'from-[#d44d13] to-[#e55a2b]'
                    } rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    {testimonio.autor.charAt(0)}
                    </div>
                    <div>
                    <div className={`font-bold text-lg ${
                        index % 2 === 0 ? 'text-[#245565]' : 'text-[#d44d13]'
                    } group-hover:brightness-110 transition-all duration-300`}>
                        {testimonio.autor}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">{testimonio.cargo}</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>


{/* SECCIÓN DE CTA MEJORADA */}
    <section className="relative overflow-hidden">
    {/* Fondo con patrón geométrico */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#245565] via-[#2a6476] to-[#327a8f]"></div>
    
    {/* Elementos decorativos geométricos */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white/10 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#d44d13]/20 rounded-full blur-sm"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-4 border-[#d44d13]/30 rotate-45"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-white/5 rounded-full"></div>
        <div className="absolute top-1/3 left-1/2 w-12 h-12 bg-[#d44d13]/15 transform -translate-x-1/2 rotate-45"></div>
    </div>
    
    {/* Ondas decorativas */}
    <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-20 fill-white/5">
        <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z"></path>
        </svg>
    </div>
    <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-[#d44d13]/10">
        <path d="M0,80 Q400,20 800,80 T1200,80 L1200,120 L0,120 Z"></path>
        </svg>
    </div>

    <div className="relative z-10 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
        <div className="space-y-8">
            {/* Icono decorativo */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#d44d13] rounded-full shadow-2xl mb-6 animate-pulse">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            📞 ¿Problemas en casa u oficina? ¡Llámanos y lo resolvemos al instante!
            <span className="block text-[#d44d13] text-5xl md:text-7xl font-black bg-gradient-to-r from-[#d44d13] to-[#f66d43] bg-clip-text ">
               
            </span>
            </h2>
            
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <button className="group relative bg-[#d44d13] hover:bg-[#e55a2b] text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#f66d43] to-[#d44d13] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <a href='/contacto' className="relative z-10 flex items-center">
                Solicitar Cotización
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
                </a>
            </button>
            
            <button className="group border-3 border-white text-white hover:bg-white hover:text-[#245565] px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-sm">
                <a href="tel:+573132841728" className="flex items-center">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Llamar Ahora
                </a>
            </button>
            </div>
        </div>
        </div>
    </div>
    </section>

    </div>
  );
};

export default PorqueElegirnos;