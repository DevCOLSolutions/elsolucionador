
import ElSolucionadorNavbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { WhatsAppFloatingButton } from "../../../components/Whatsapp/Whatsaap";
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa";
import { Facebook, Instagram } from "lucide-react";
import ContactForm2 from "../../../components/formcontact/Contactcontact";

import { Metadata } from "next";
import { EmergencyFloatingButton } from "../../../components/Whatsapp/Emergency";

export const metadata: Metadata = {
  title: "Contacto | El Solucionador - Servicios Técnicos Bogotá",
  description: "Contacta a El Solucionador para servicios técnicos en Bogotá. Teléfono, WhatsApp, email. Cotizaciones gratuitas, atención 24/7. ¡Respuesta inmediata!",
  keywords: [
    "contacto servicios técnicos Bogotá",
    "teléfono electricista Bogotá",
    "WhatsApp plomero urgente",
    "cotización servicios técnicos",
    "emergencias técnicas 24 horas",
    "solicitar técnico domicilio",
    "presupuesto reparaciones",
    "contacto El Solucionador"
  ],
  openGraph: {
    title: "Contacto | El Solucionador - Atención 24/7 Bogotá",
    description: "Contacta nuestros técnicos especializados. Atención inmediata, cotizaciones gratis, servicio 24/7 en Bogotá.",
    url: "https://www.elsolucionador.com.co/contacto", 
    images: [
      {
        url: "/home/2.jpeg",
        width: 1200,
        height: 630,
        alt: "Contacta El Solucionador para servicios técnicos en Bogotá - Atención 24/7",
      },
    ],
  },
  alternates: {
    canonical: "https://www.elsolucionador.com.co/contacto",
  },
  other: {
    // Tags específicos para páginas de contacto
    'contact:phone_number': '+57-313-2841728', // Tu teléfono real
    'contact:email': 'contacto@elsolucionador.com.co', // Tu email real
  }
};

export default function page() {
  return (
    <div className="">
       <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage", 
            "name": "Contacto El Solucionador",
            "description": "Información de contacto para servicios técnicos en Bogotá",
            "url": "https://www.elsolucionador.com.co/contacto",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "El Solucionador",
              "telephone": "+57-XXX-XXXXXXX", // Tu teléfono real
              "email": "info@elsolucionador.com.co", // Tu email real
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressRegion": "Cundinamarca",
                "addressCountry": "CO"
              }
            }
          })
        }}
      />
      
      <ElSolucionadorNavbar/>
      
      <section className="bg-amber-100 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 text-right">
          
          {/* Columna de texto y redes */}
          <div className="mr-auto place-self-center lg:col-span-8">
            {/* Título */}
            <h1 className="max-w-2xl mb-4 text-4xl font-semibold md:text-4xl xl:text-6xl text-[#245565] ">
             
              Comunicate <br />con<span className="text-[#d44d13]"> Nosotros</span>
            
            </h1>

            {/* Mensaje descriptivo */}
            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-lg ">
              ¿Tienes dudas o necesitas ayuda? Escríbenos por cualquiera de nuestras redes sociales y te responderemos rápidamente.
            </p>

            {/* Íconos de contacto */}
            <div className="flex justify-end gap-4">
              <a
                href={`https://wa.me/573132841728?text=${encodeURIComponent(
                  "¡Hola! 👋 Me gustaría solicitar más información sobre sus servicios ⚙️. ¡Gracias!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-green-500 text-white hover:brightness-110 hover:scale-110 transition-transform duration-300"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100049057791360"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#4267B2] text-white hover:brightness-110 hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/elsolucionador/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white hover:brightness-110 hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna del logo */}
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

      <ContactForm2/>
      <Footer/>
      <EmergencyFloatingButton/>
      <WhatsAppFloatingButton/>
    </div>
  );
}
