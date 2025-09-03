
import ElSolucionadorNavbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { WhatsAppFloatingButton } from "../../../components/Whatsapp/Whatsaap";
import Servicios2 from "../../../components/Services/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | El Solucionador",
  description: "Descubre los servicios que El Solucionador ofrece: soluciones rápidas, confiables y de calidad.",
  keywords: ["servicios", "soluciones profesionales", "calidad", "Colombia"],
  openGraph: {
    title: "Servicios | El Solucionador",
    description: "Descubre los servicios que El Solucionador ofrece: soluciones rápidas, confiables y de calidad.",
    url: "https://www.elsolucionador.com.co/servicios",
    siteName: "El Solucionador",
    images: [
      {
        url: "https://www.elsolucionador.com.co/og-servicios.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios de El Solucionador",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
};


export default function page() {
  return (
    <div className="">
      <ElSolucionadorNavbar/>
        <Servicios2/>
      <Footer/>
      <WhatsAppFloatingButton/>
    </div>
  );
}
