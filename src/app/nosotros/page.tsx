
import ElSolucionadorNavbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { WhatsAppFloatingButton } from "../../../components/Whatsapp/Whatsaap";
import AboutUs from "../../../components/about/About";
import { Metadata } from "next";
import { EmergencyFloatingButton } from "../../../components/Whatsapp/Emergency";


export const metadata: Metadata = {
  title: "Nosotros | El Solucionador - Empresa de Servicios Técnicos Bogotá",
  description: "Conoce El Solucionador: empresa líder en servicios técnicos domiciliarios en Bogotá con más de X años de experiencia. Técnicos certificados, garantía en todos los trabajos.",
  keywords: [
    "empresa servicios técnicos Bogotá",
    "técnicos certificados Colombia",
    "experiencia reparaciones domiciliarias",
    "equipo profesional electricistas",
    "empresa confiable plomería",
    "historia El Solucionador",
    "valores empresa técnica",
    "misión servicios hogar"
  ],
  openGraph: {
    title: "Nosotros | El Solucionador - Expertos en Servicios Técnicos",
    description: "Empresa líder en servicios técnicos domiciliarios en Bogotá. Técnicos certificados con años de experiencia y garantía total.",
    url: "https://www.elsolucionador.com.co/nosotros",
    images: [
      {
        url: "/home/4.jpeg",
        width: 1200,
        height: 630,
        alt: "Equipo de técnicos profesionales de El Solucionador en Bogotá",
      },
    ],
  },
  alternates: {
    canonical: "https://www.elsolucionador.com.co/nosotros",
  },
};


export default function page() {
  return (
    <div className="">

      {/* Schema.org para página About */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Acerca de El Solucionador",
            "description": "Historia y valores de El Solucionador, empresa de servicios técnicos en Bogotá",
            "url": "https://www.elsolucionador.com.co/nosotros",
            "mainEntity": {
              "@type": "Organization",
              "name": "El Solucionador",
              "foundingDate": "2015", // Cambia por tu año real
              "numberOfEmployees": "15-20", // Ajusta según tu equipo
              "slogan": "Soluciones rápidas, confiables y profesionales"
            }
          })
        }}
      />

      <ElSolucionadorNavbar/>

        <AboutUs/>
      <Footer/>
      <EmergencyFloatingButton/>
      <WhatsAppFloatingButton/>
    </div>
  );
}
