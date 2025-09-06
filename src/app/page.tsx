
import ElSolucionadorNavbar from "../../components/Navbar";
import ShuffleHero from "../../components/Hero";
import Footer from "../../components/footer/Footer";
import { WhatsAppFloatingButton } from "../../components/Whatsapp/Whatsaap";
import ContactForm from "../../components/formcontact/Form_contact";
import ServicesSection from "../../components/Services/Services_home";
import App from "../../components/clients/Clients";
import ExpandableGallery from "../../components/gallery/Gallery";

import { Metadata } from "next";
import { EmergencyFloatingButton } from "../../components/Whatsapp/Emergency";

export const metadata: Metadata = {
  title: "Servicios Técnicos Domiciliarios en Bogotá | El Solucionador",
  description: "El Solucionador ofrece servicios técnicos especializados en Bogotá: electricista certificado, plomero experto, carpintero profesional. Atención 24/7, cotizaciones gratuitas. ¡Llámanos ya!",
  keywords: [
    "electricista Bogotá",
    "plomero Bogotá", 
    "carpintero Bogotá",
    "servicios técnicos domiciliarios",
    "reparaciones eléctricas Bogotá",
    "plomería emergencias",
    "técnico aire acondicionado",
    "instalaciones eléctricas",
    "reparaciones domiciliarias",
    "mantenimiento hogar Bogotá",
    "electricista certificado",
    "plomero 24 horas",
    "carpintería a medida",
    "servicios hogar Colombia"
  ],
  openGraph: {
    title: "El Solucionador | Servicios Técnicos Domiciliarios Bogotá",
    description: "Electricista, plomero y carpintero profesionales en Bogotá. Servicio rápido, confiable y con garantía. Cotiza gratis.",
    url: "https://www.elsolucionador.com.co",
    siteName: "El Solucionador",
    images: [
      {
        url: "/gallery/2.jpg", // Imagen específica de servicios
        width: 1200,
        height: 630,
        alt: "Técnicos especializados realizando servicios domiciliarios en Bogotá - El Solucionador",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Solucionador | Servicios Técnicos Bogotá",
    description: "Electricista, plomero, carpintero a domicilio. Servicio profesional en Bogotá 24/7.",
    images: ["/gallery/1.jpeg"],
  },
  alternates: {
    canonical: "https://www.elsolucionador.com.co/",
  },
  other: {
    // Geo tags para SEO local
    'geo.region': 'CO-DC',
    'geo.placename': 'Bogotá',
    'geo.position': '4.7110;-74.0721',
    'ICBM': '4.7110, -74.0721',
  }
};

export default function Home() {
  return (
    <div className="">
      <ElSolucionadorNavbar/>
      <ShuffleHero/>
      <App/>
      <ServicesSection/>
      <ContactForm/>
      <ExpandableGallery/>
      <Footer/>
      <EmergencyFloatingButton/>
      <WhatsAppFloatingButton/>
    </div>
  );
}
