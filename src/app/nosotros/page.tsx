
import ElSolucionadorNavbar from "../../../components/Navbar";
import Footer from "../../../components/footer/Footer";
import { WhatsAppFloatingButton } from "../../../components/Whatsapp/Whatsaap";
import AboutUs from "../../../components/about/About";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Nosotros | El Solucionador",
  description: "Conoce a El Solucionador: nuestra misión, visión y valores basados en rapidez, confiabilidad y profesionalismo.",
  keywords: ["sobre nosotros", "El Solucionador", "misión", "visión", "valores"],
  openGraph: {
    title: "Sobre Nosotros | El Solucionador",
    description: "Conoce a El Solucionador: nuestra misión, visión y valores basados en rapidez, confiabilidad y profesionalismo.",
    url: "https://www.elsolucionador.com.co/nosotros",
    siteName: "El Solucionador",
    images: [
      {
        url: "https://www.elsolucionador.com.co/og-nosotros.jpg",
        width: 1200,
        height: 630,
        alt: "El Solucionador - Nosotros",
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

        <AboutUs/>
      <Footer/>
      <WhatsAppFloatingButton/>
    </div>
  );
}
