import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.className}>
      <body
        className="antialiased"
      >
        {children}

        <ToastContainer
                  position="top-right"

                  autoClose={10000}
                  hideProgressBar={false}
                  // ... más configuraciones
                />
      </body>
    </html>
  );
}
