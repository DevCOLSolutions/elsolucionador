'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {  BriefcaseBusiness, CircleX, Facebook, House, Instagram, 
  Mail, MapPinned, Menu, MessageSquare, PhoneCall, Users, Wrench, ChevronDown 
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useRouter, usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
  submenu?: Omit<NavItem, 'icon' | 'hasSubmenu' | 'submenu'>[];
}

interface ContactInfo {
  phone: string;
  email: string;
  location: string;
}

interface SocialLinks {
  facebook: string;
  instagram: string;
  whatsapp: {
    number: string;
    message: string;
  };
}

const navItems: NavItem[] = [
  { label: 'Inicio', href: '/', icon: <House className="mr-2 h-4 w-4" /> },
  { label: 'Nosotros', href: '/nosotros', icon: <Users className="mr-2 h-4 w-4" /> },
  { 
    label: 'Servicios', href: '/servicios', icon: <BriefcaseBusiness className="mr-2 h-4 w-4" />, 
    
  },
  { label: '¿Por qué elegirnos?', href: '/por-que-elegirnos', icon: <Wrench className="mr-2 h-4 w-4" /> },
  { label: 'Contacto', href: '/contacto', icon: <MessageSquare className="mr-2 h-4 w-4 font-bold" /> },
];

const contactInfo: ContactInfo = {
  phone: '+57 313 284 17 28',
  email: 'elsolucionador2019@gmail.com',
  location: 'Bogotá, Colombia',
};

const socialLinks: SocialLinks = {
  facebook: 'https://web.facebook.com/profile.php?id=100049057791360',
  instagram: 'https://www.instagram.com/elsolucionador/',
  whatsapp: {
    number: '573132841728',
    message: '¡Hola! 👋 Tengo una emergencia y necesito asistencia técnica urgente 🚨⚡. ¡Gracias!',
  },
};

const ElSolucionadorNavbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = (): void => setMenuOpen(!menuOpen);

  const handleDropdownToggle = (label: string): void => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleEmergencyClick = (): void => {
    router.push('/contacto');
    setMenuOpen(false);
  };

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Prevenir scroll cuando el menú está abierto en móvil
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <header className="w-full relative z-50">
        <div className="mx-auto flex flex-wrap h-16 sm:h-20 md:h-24">  

          {/* LOGO */}
          <div className="w-full md:w-2/10 h-full relative rounded-br-4xl bg-white flex items-center justify-between px-4 md:px-0">
            <Link href="/" className="flex items-center h-full">
              <Image 
                src="/logo_horizontal.svg" 
                alt="El Solucionador" 
                width={160}
                height={60}
                className="block md:hidden object-contain max-h-12"
                priority
              />
              <Image
                src="/logo_horizontal.svg"
                alt="El Solucionador Desktop"
                width={280}
                height={120}
                className="hidden md:block object-contain p-2"
                priority
              />
            </Link>

            {/* Botón hamburguesa en móviles - Mejorado */}
            <button 
              className="md:hidden p-2 rounded-lg transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:bg-gray-100" 
              onClick={toggleMenu}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? (
                <CircleX className="w-6 h-6 text-[#d44d13]" />
              ) : (
                <Menu className="w-6 h-6 text-[#245565]" />
              )}
            </button>
          </div>

          {/* CONTENEDOR DERECHO */}
          <div className="w-full md:w-8/10 flex flex-col h-full">
          
            {/* INFORMACIÓN ARRIBA - Solo en desktop */}
            <div 
              className="rounded-bl-4xl tracking-wide hidden md:flex justify-between items-center text-xs lg:text-xs text-white p-3 px-6 h-[30px]"
              style={{ backgroundColor: '#d44d13' }}
            >
              <div className="flex space-x-4 flex-row mx-auto tracking-wide">
                <span className="flex items-center border-r px-2">
                  <PhoneCall className="w-3.5 h-3.5 mr-2"/> 
                  {contactInfo.phone}
                </span>
                <span className="flex items-center border-r px-2">
                  <Mail className="w-3.5 h-3.5 mr-2"/> 
                  {contactInfo.email}
                </span>
                <span className="flex items-center">
                  <MapPinned className="w-3.5 h-3.5 mr-2"/>
                  {contactInfo.location}
                </span>
              </div>
              
              <div className="space-x-3 hidden lg:flex">
                <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" 
                  className="transition-transform duration-200 hover:scale-125">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                  className="transition-transform duration-200 hover:scale-125">
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link 
                  href={`https://wa.me/${socialLinks.whatsapp.number}?text=${encodeURIComponent(socialLinks.whatsapp.message)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-125"
                >
                  <FaWhatsapp className="w-4 h-4" />
                </Link>
              </div>           
            </div>
            
            {/* MENÚ DESKTOP */}
            <div className="hidden md:flex md:items-stretch md:justify-between p-6 md:p-2 md:h-full bg-white text-[#245565]">
              <div className="flex flex-row md:space-x-12 text-center h-full mx-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.hasSubmenu && pathname.startsWith(item.href));
                  return (
                    <div key={item.label} className="relative group">
                      {item.hasSubmenu ? (
                        <div className="h-full">
                          <button
                            className={`text-base font-medium h-full flex items-center relative transition-all duration-300 transform  
                              ${isActive ? "text-[#d44d13]" : "text-[#245565]"}
                              group-hover:text-[#d44d13]
                              after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#d44d13] after:transition-all after:duration-300 after:origin-left
                              ${isActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}`}
                            onClick={() => handleDropdownToggle(item.label)}
                          >
                            {item.icon}
                            {item.label}
                            <ChevronDown className="ml-1 w-4 h-4" />
                          </button>

                          {/* Dropdown Desktop */}
                         
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`text-base font-medium h-full flex items-center relative transition-all duration-300 transform
                            ${isActive ? "text-[#d44d13]" : "text-[#245565] hover:text-[#d44d13]"}
                            after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#d44d13] after:transition-all after:duration-300
                            ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                        >
                          {item.icon}
                          {item.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Botón Emergencia Desktop */}
              <div className="hidden lg:flex mr-6">
                <div className="md:mt-0 md:ml-10 h-full flex items-center">
                  <a
                   href={`https://wa.me/573132841728?text=${encodeURIComponent(
                    "⚡ ¡Hola! Tengo una emergencia. Necesito atención inmediata ⏱️"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                    onClick={handleEmergencyClick}
                    className="cursor-pointer py-2 px-5 rounded-full border-2 border-[#d44d13] text-[#d44d13] bg-white flex items-center gap-2 font-bold text-sm uppercase tracking-wide 
                              hover:bg-[#d44d13] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md animate-fast-blink"
                  >
                    🚨 ¡Tengo una Emergencia!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL MEJORADO */}
      <div className={`
        fixed inset-0 z-40 md:hidden transition-all duration-300 ease-in-out
        ${menuOpen 
          ? 'opacity-100 pointer-events-auto' 
          : 'opacity-0 pointer-events-none'
        }
      `}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 bg-opacity-50" onClick={() => setMenuOpen(false)} />
        
        {/* Menú deslizante */}
        <div className={`
          absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          {/* Header del menú móvil */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200" style={{ backgroundColor: '#fff' }}>
            <h3 className="text-white font-bold text-lg">Menú</h3>
            <button 
              onClick={toggleMenu}
              className="p-1 rounded-full text-white hover:bg-white hover:bg-opacity-20 transition-colors duration-200"
              aria-label="Cerrar menú"
            >
              <CircleX className="w-6 h-6" />
            </button>
          </div>

          {/* Contenido del menú */}
          <div className="flex flex-col h-full overflow-y-auto"> <br />
            {/* Navegación */}
            <div className="lg:flex mr-6 flex items-center justify-center" >
                <div className="md:mt-0 md:ml-10 h-full flex items-center">
                  <button
                    onClick={handleEmergencyClick}
                    className="cursor-pointer py-2 px-5 rounded-full border-2 border-[#d44d13] text-[#d44d13] bg-white flex items-center gap-2 font-bold text-sm uppercase tracking-wide 
                              hover:bg-[#d44d13] hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md animate-fast-blink"
                  >
                    🚨 ¡Tengo una Emergencia!
                  </button>
                </div>
              </div>
            <nav className="flex-1 py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || (item.hasSubmenu && pathname.startsWith(item.href));
                return (
                  <div key={item.label} className="border-b border-gray-100 last:border-b-0">
                    {item.hasSubmenu ? (
                      <div>
                        <button
                          className={`w-full flex items-center justify-between px-4 py-4 text-left font-medium transition-colors duration-200
                            ${isActive ? "text-[#d44d13] bg-orange-50" : "text-[#245565] hover:bg-gray-50"}`}
                          onClick={() => handleDropdownToggle(item.label)}
                        >
                          <span className="flex items-center">
                            {item.icon}
                            {item.label}
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>

                        {/* Submenu móvil */}
                        <div className={`overflow-hidden transition-all duration-300 ${
                          activeDropdown === item.label ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                          {item.submenu && item.submenu.map((subItem) => (
                            <Link
                              key={subItem.label}
                              href={subItem.href}
                              className={`block px-8 py-3 text-sm font-medium transition-colors duration-200 border-l-2 ml-4
                                ${pathname === subItem.href 
                                  ? "text-[#d44d13] border-[#d44d13] bg-orange-50" 
                                  : "text-[#245565] border-transparent hover:bg-gray-50 hover:border-gray-300"
                                }`}
                              onClick={() => {
                                setActiveDropdown(null);
                                setMenuOpen(false);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`flex items-center px-4 py-4 font-medium transition-colors duration-200
                          ${isActive 
                            ? "text-[#d44d13] bg-orange-50" 
                            : "text-[#245565] hover:bg-gray-50"
                          }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Información de contacto en móvil */}
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <h4 className="font-bold text-[#245565] mb-3">Contacto</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-[#245565]">
                  <PhoneCall className="w-4 h-4 mr-2 text-[#d44d13]"/> 
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-[#d44d13] transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center text-[#245565]">
                  <Mail className="w-4 h-4 mr-2 text-[#d44d13]"/> 
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-[#d44d13] transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center text-[#245565]">
                  <MapPinned className="w-4 h-4 mr-2 text-[#d44d13]"/>
                  {contactInfo.location}
                </div>
              </div>

              {/* Redes sociales en móvil */}
              <div className="flex justify-center space-x-4 mt-4 ">
                <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" 
                  className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
                  <Facebook className="w-5 h-5 text-[#245565]" />
                </Link>
                <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" 
                  className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200">
                  <Instagram className="w-5 h-5 text-[#245565]" />
                </Link>
                <Link 
                  href={`https://wa.me/${socialLinks.whatsapp.number}?text=${encodeURIComponent(socialLinks.whatsapp.message)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#245565]" />
                </Link>
              </div>
            </div> <br /><br /><br />

            {/* Botón Emergencia móvil */}
            
          </div>
        </div>
      </div>

      {/* Click outside to close dropdown en desktop */}
      {activeDropdown && (
        <div className="fixed inset-0 z-30 hidden md:block" onClick={() => setActiveDropdown(null)} />
      )}
    </>
  );
};

export default ElSolucionadorNavbar;