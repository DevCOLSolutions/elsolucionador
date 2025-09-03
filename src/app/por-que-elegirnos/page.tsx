
import ElSolucionadorNavbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { WhatsAppFloatingButton } from "../../../components/Whatsapp/Whatsaap";
import PorqueElegirnos from "../../../components/porqueelegirnos/Porque";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Por qué elegirnos? | El Solucionador",
  description: "Elige El Solucionador por nuestra rapidez, confiabilidad, calidad, transparencia y profesionalismo.",
  keywords: ["por qué elegirnos", "El Solucionador", "ventajas", "profesionalismo"],
  openGraph: {
    title: "¿Por qué elegirnos? | El Solucionador",
    description: "Elige El Solucionador por nuestra rapidez, confiabilidad, calidad, transparencia y profesionalismo.",
    url: "https://www.elsolucionador.com.co/por-que-elegirnos",
    siteName: "El Solucionador",
    images: [
      {
        url: "https://www.elsolucionador.com.co/og-elegirnos.jpg",
        width: 1200,
        height: 630,
        alt: "¿Por qué elegirnos? El Solucionador",
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
        <PorqueElegirnos/>
      <Footer/>
      <WhatsAppFloatingButton/>
    </div>
  );
}
