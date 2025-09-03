'use client'
import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  price?: string;
}

const ExpandableGallery: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
  { id: 1, image: '/gallery/1.jpeg', title: '', subtitle: '', price: '#001' },
  { id: 2, image: '/gallery/2.jpeg', title: '', subtitle: '', price: '#002' },
  { id: 3, image: '/gallery/3.jpeg', title: '', subtitle: '', price: '#003' },
  { id: 4, image: '/gallery/4.jpeg', title: '', subtitle: '', price: '#004' },
  { id: 5, image: '/gallery/5.jpeg', title: '', subtitle: '', price: '#005' },
  { id: 6, image: '/gallery/6.jpeg', title: '', subtitle: '', price: '#006' },
  { id: 7, image: '/gallery/7.jpeg', title: '', subtitle: '', price: '#007' },
  { id: 8, image: '/gallery/8.jpeg', title: '', subtitle: '', price: '#008' },
];


  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#245565] mb-4 uppercase -tracking-wide">
            Servicios <span className='text-[#d44d13]'>confiables</span> para <br /> tu hogar y empresa
          </h1>
          <p className="text-gray-600 text-md md:text-lg max-w-2xl mx-auto">
            Proyectos de electricidad, plomería, obra civil y emergencias para residencias y negocios, con calidad y confianza.
          </p>
        </div>

        {/* Gallery */}
        <div className="flex justify-center items-stretch gap-2 h-96">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                relative overflow-hidden rounded-2xl cursor-pointer group
                transition-all duration-500 ease-in-out
                ${hoveredIndex === null 
                  ? 'flex-1' 
                  : hoveredIndex === index 
                    ? 'flex-[3]' 
                    : 'flex-[0.5]'
                }
              `}
               style={{ minHeight: '100%' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 "
              style={{ backgroundImage: `url(${item.image})` }}
            />

              
              {/* Overlay */}
              
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className={`
                  transition-all duration-300
                  ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 
                    hoveredIndex !== null && hoveredIndex !== index ? 'opacity-0 translate-y-4' : 
                    'opacity-100 translate-y-0'}
                `}>
                  <span className="text-sm opacity-80 block mb-1">{item.price}</span>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  {item.subtitle && (
                    <p className="text-sm opacity-90 mb-4">{item.subtitle}</p>
                  )}
                  
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Indicators */}
        
      </div>
    </div>
  );
};

export default ExpandableGallery;