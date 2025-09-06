
import ElSolucionadorNavbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { WhatsAppFloatingButton } from "../../../components/Whatsapp/Whatsaap";
import PorqueElegirnos from "../../../components/porqueelegirnos/Porque";

import { Metadata } from "next";
import { EmergencyFloatingButton } from "../../../components/Whatsapp/Emergency";

export const metadata: Metadata = {
  title: "¿Por Qué Elegirnos? | El Solucionador - Ventajas de Nuestros Servicios",
  description: "Descubre por qué elegir El Solucionador: técnicos certificados, garantía total, precios justos, atención 24/7, experiencia comprobada en Bogotá. ¡Somos tu mejor opción!",
  keywords: [
    "por qué elegir El Solucionador",
    "ventajas servicios técnicos",
    "técnicos certificados Bogotá",
    "garantía servicios técnicos",
    "precios justos reparaciones",
    "mejor empresa técnica Bogotá",
    "experiencia servicios domiciliarios",
    "confianza reparaciones hogar"
  ],
  openGraph: {
    title: "¿Por Qué Elegir El Solucionador? | Servicios Técnicos Bogotá",
    description: "Técnicos certificados, garantía total, precios justos y atención 24/7. Descubre las ventajas de elegir El Solucionador.",
    url: "https://www.elsolucionador.com.co/por-que-elegirnos",
    images: [
      {
        url: "/home/6.jpeg",
        width: 1200,
        height: 630,
        alt: "Ventajas de elegir El Solucionador para servicios técnicos en Bogotá",
      },
    ],
  },
  alternates: {
    canonical: "https://www.elsolucionador.com.co/por-que-elegirnos",
  },
};
export default function page() {
  return (
    <div className="">
      {/* Schema.org para página de características/ventajas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Por Qué Elegir El Solucionador",
            "description": "Ventajas y beneficios de elegir nuestros servicios técnicos",
            "url": "https://www.elsolucionador.com.co/por-que-elegirnos",
            "mainEntity": {
              "@type": "ItemList",
              "name": "Ventajas de El Solucionador",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Técnicos Certificados"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Garantía Total en Trabajos"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Atención 24/7"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Precios Competitivos"
                }
              ]
            }
          })
        }}
      />
      
      <ElSolucionadorNavbar/>
        <PorqueElegirnos/>
      <Footer/>
      <EmergencyFloatingButton/>
      <WhatsAppFloatingButton/>
    </div>
  );
}
