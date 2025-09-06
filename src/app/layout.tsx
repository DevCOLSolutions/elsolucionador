// app/layout.tsx - Layout optimizado para SEO
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import type { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

// Metadata global del sitio
export const metadata: Metadata = {
  metadataBase: new URL('https://www.elsolucionador.com.co'),
  title: {
    default: 'El Solucionador | Servicios Técnicos Domiciliarios en Bogotá',
    template: '%s | El Solucionador'
  },
  description: 'Servicios técnicos especializados en Bogotá: electricista, plomero, carpintero, aires acondicionados. Reparaciones domiciliarias rápidas y confiables.',
  keywords: [
    'servicios técnicos Bogotá',
    'electricista Bogotá',
    'plomero Bogotá', 
    'carpintero domiciliario',
    'reparaciones hogar',
    'técnico a domicilio',
    'servicios domiciliarios Colombia',
    'electricista domiciliario',
    'plomero emergencias',
    'reparaciones eléctricas',
    'instalaciones eléctricas',
    'mantenimiento hogar'
  ],
  authors: [{ name: 'El Solucionador' }],
  creator: 'El Solucionador',
  publisher: 'El Solucionador',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.elsolucionador.com.co',
    siteName: 'El Solucionador',
    title: 'El Solucionador | Servicios Técnicos Domiciliarios en Bogotá',
    description: 'Servicios técnicos especializados: electricista, plomero, carpintero. Atención 24/7 en Bogotá y alrededores.',
    images: [
      {
        url: '/gallery/1.jpeg', // Asegúrate de tener esta imagen
        width: 1200,
        height: 630,
        alt: 'El Solucionador - Servicios Técnicos Bogotá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Solucionador | Servicios Técnicos Bogotá',
    description: 'Electricista, plomero, carpintero a domicilio en Bogotá. Servicio rápido y confiable.',
    images: ['/gallery/2.jpg'],
  },
  alternates: {
    canonical: 'https://www.elsolucionador.com.co',
  },
  other: {
    'google-site-verification': 'TU_CODIGO_DE_VERIFICACION_AQUI', // Obtén esto de Google Search Console
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={inter.className}>
      <head>
        {/* Favicon optimizado */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Schema.org para negocio local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "El Solucionador",
              "description": "Servicios técnicos domiciliarios especializados en Bogotá",
              "url": "https://www.elsolucionador.com.co",
              "telephone": "+57-313-2841728", // Reemplaza con tu teléfono real
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressRegion": "Cundinamarca", 
                "addressCountry": "CO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "4.7110",
                "longitude": "-74.0721"
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 08:00-15:00"
              ],
              "priceRange": "$$",
              "image": "https://www.elsolucionador.com.co/logo.svg",
              "sameAs": [
                "https://web.facebook.com/profile.php?id=100049057791360",
                "https://www.instagram.com/elsolucionador"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios Técnicos Domiciliarios",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Servicios de Electricidad",
                      "description": "Instalaciones eléctricas, reparaciones, mantenimiento"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Servicios de Plomería",
                      "description": "Reparaciones de tuberías, instalación sanitarios"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Servicios de Carpintería",
                      "description": "Muebles a medida, reparaciones, instalaciones"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      
      <body className="antialiased">
        {children}
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
        />
      </body>
    </html>
  );
}