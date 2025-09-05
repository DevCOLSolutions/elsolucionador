
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
  title: "Inicio | El Solucionador",
  description: "El Solucionador: soluciones rápidas, confiables y profesionales para tus necesidades en Colombia.",
  keywords: ["soluciones", "servicios profesionales", "rapidez", "confianza", "Colombia"],
  openGraph: {
    title: "Inicio | El Solucionador",
    description: "El Solucionador: soluciones rápidas, confiables y profesionales para tus necesidades en Colombia.",
    url: "https://www.elsolucionador.com.co",
    siteName: "El Solucionador",
    images: [
      {
        url: "https://www.elsolucionador.com.co/",
        width: 1200,
        height: 630,
        alt: "El Solucionador - Soluciones Profesionales",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
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
