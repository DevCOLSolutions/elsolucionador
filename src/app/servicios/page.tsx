
import ElSolucionadorNavbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { WhatsAppFloatingButton } from "../../../components/Whatsapp/Whatsaap";
import Servicios2 from "../../../components/Services/Services";
import { Metadata } from "next";
import { EmergencyFloatingButton } from "../../../components/Whatsapp/Emergency";

export const metadata: Metadata = {
  title: "Servicios Técnicos Bogotá | Electricista, Plomero, Carpintero",
  description: "Servicios técnicos especializados en Bogotá: electricidad residencial, plomería, carpintería, aires acondicionados. Técnicos certificados, garantía total, cotización gratuita.",
  keywords: [
    "servicios técnicos Bogotá",
    "electricista residencial Bogotá",
    "plomero profesional Bogotá", 
    "carpintero a medida",
    "técnico aire acondicionado",
    "instalaciones eléctricas certificadas",
    "reparaciones plomería emergencia",
    "mantenimiento preventivo hogar",
    "servicios domiciliarios Bogotá",
    "técnico refrigeración",
    "electricista industrial Bogotá",
    "plomería comercial"
  ],
  openGraph: {
    title: "Servicios Técnicos Especializados en Bogotá | El Solucionador", 
    description: "Electricista, plomero, carpintero profesionales. Instalaciones, reparaciones y mantenimiento. Servicio 24/7 con garantía.",
    url: "https://www.elsolucionador.com.co/servicios",
    images: [
      {
        url: "/home/4.jpeg",
        width: 1200,
        height: 630,
        alt: "Servicios técnicos especializados: electricidad, plomería, carpintería en Bogotá",
      },
    ],
  },
  alternates: {
    canonical: "https://www.elsolucionador.com.co/servicios",
  },
};


export default function page() {
  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Servicios Técnicos Domiciliarios",
            "description": "Servicios especializados de electricidad, plomería y carpintería en Bogotá",
            "provider": {
              "@type": "LocalBusiness",
              "name": "El Solucionador"
            },
            "areaServed": {
              "@type": "City",
              "name": "Bogotá"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Catálogo de Servicios Técnicos",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Servicios de Electricidad",
                    "description": "Instalaciones eléctricas, reparaciones, mantenimiento preventivo"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Servicios de Plomería",
                    "description": "Reparación tuberías, instalación sanitarios, destapado desagües"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Servicios de Carpintería", 
                    "description": "Muebles a medida, reparación puertas, instalación repisas"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Servicios Aires Acondicionados",
                    "description": "Instalación, mantenimiento y reparación de sistemas de climatización"
                  }
                }
              ]
            }
          })
        }}
      />

      <ElSolucionadorNavbar/>
        <Servicios2/>
      <Footer/>
      <EmergencyFloatingButton/>
      <WhatsAppFloatingButton/>
    </div>
  );
}
