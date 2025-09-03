'use client'
import React, { useState } from 'react'
import { Zap, ShieldCheck, Award, Eye, Briefcase } from 'lucide-react'
import Image from 'next/image';
import GalleryAbout from '../gallery/Galleryabout';
import ValuesInteractive from './Valores';

const AboutUs: React.FC = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const values = [
    { 
      title: 'Rapidez', 
      description: 'Porque sabemos que el tiempo no espera', 
      icon: <Zap className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    { 
      title: 'Confiabilidad', 
      description: 'Tu tranquilidad es nuestra prioridad', 
      icon: <ShieldCheck className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      title: 'Calidad', 
      description: 'Cada trabajo refleja nuestro compromiso', 
      icon: <Award className="w-6 h-6" />,
      color: 'from-orange-600 to-orange-700'
    },
    { 
      title: 'Transparencia', 
      description: 'Presupuestos claros, sin sorpresas', 
      icon: <Eye className="w-6 h-6" />,
      color: 'from-blue-600 to-indigo-600'
    },
    { 
      title: 'Profesionalismo', 
      description: 'Personal calificado y experimentado', 
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600'
    },
  ]

  return (
    <section className="">
       <section className="bg-amber-100 dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 text-right">
                  <div className="mr-auto place-self-center lg:col-span-8">
                    <h1 className="max-w-2xl mb-4 text-4xl font-semibold md:text-4xl xl:text-6xl text-[#245565] dark:text-white">
                     
                     Nosotros
                    
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-lg dark:text-gray-400">
                      Somos una empresa orientada a la excelencia en servicios de mantenimiento y reparación express. En El Solucionador Express trabajamos bajo principios de calidad, responsabilidad y eficiencia, con el propósito de convertirnos en el aliado estratégico de cada cliente.
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
      <div className="max-w-7xl mx-auto">
       
      

        {/* Mission & Vision Grid */}
        

        <ValuesInteractive/>

        {/* Call to Action */}
       <main className="p-8">
      <GalleryAbout
       images={[
          ["/home/1.jpeg", "/home/2.jpeg", "/home/3.jpeg"],
          ["/home/4.jpeg", "/home/5.jpeg", "/home/6.jpeg"],
          ["/home/7.jpeg", "/home/8.jpeg", "/home/9.jpeg"],
          ["/home/10.jpeg", "/home/11.jpeg", "/home/12.jpeg"],
        ]}

      />
        </main>
        
        
    
      </div>
    </section>
  )
}

export default AboutUs