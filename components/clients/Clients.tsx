'use client'
import React from 'react';

interface LogoCarouselProps {
  logos?: (string | { text: string; bg?: string })[];
  speed?: number;
}

const ClientLogosCarousel: React.FC<LogoCarouselProps> = ({ 
  logos = [
    '/clientes/1.png',
    '/clientes/2.png',
    '/clientes/3.png',
    '/clientes/4.png',
    '/clientes/5.png',
    { text: 'Clientes que confían en nosotros 🧡  ', bg: '#245565' }, // este es nuestro "banner"
  ],
  speed = 30 
}) => {
  // Duplicamos los logos para crear el efecto infinito
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden mt-10 mb-15">
      <div className="relative w-full h-32 overflow-hidden bg-[#d44dtransform -rotate-2 ">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#d4 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#d44 to-transparent z-10"></div>
        
        <div 
          className="flex items-center h-full whitespace-nowrap animate-scroll"
          style={{
            animation: `scroll ${speed}s linear infinite`,
            width: `${duplicatedLogos.length * 192}px`, // 160px + 32px margin
            willChange: 'transform'
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center mx-4 min-w-[160px] h-16 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 flex-shrink-0
                ${typeof logo === 'string' ? 'bg-white' : 'bg-[length:cover]'} `}
              style={{
                backgroundColor: typeof logo === 'object' && logo.bg ? logo.bg : undefined,
              }}
            >
              {typeof logo === 'string' ? (
                <img 
                  src={logo} 
                  alt={`Cliente ${index + 1}`} 
                  className="max-h-full max-w-full object-contain p-2"
                />
              ) : (
                <span className="text-white font-bold text-center px-4 text-lg">
                  {logo.text}
                </span>
              )}
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll ${speed}s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ClientLogosCarousel;