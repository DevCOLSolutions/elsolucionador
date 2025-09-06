"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import React from "react";
import emailjs from "emailjs-com";
interface SquareData {
  id: number;
  src: string;
}


import { toast } from 'react-toastify';
import { Download } from "lucide-react";


const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};


const ShuffleHero: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const ahora = new Date();
    const hora = ahora.toLocaleString("es-CO", {
    dateStyle: "short",
    timeStyle: "short",
  });
    try {
      const response = await emailjs.send(
        "service_4347wss", // 📌 Copia esto desde EmailJS -> Email Services
        "template_xpmfvd9", // 📌 Copia esto desde EmailJS -> Email Templates
        {
          telefono: formData.telefono,
          time: hora
        },
        "9qhb2rbI9Vn7zdTvw" // 📌 Copia esto desde EmailJS -> Account -> API Keys
      );

      if (response.status === 200) {
        setSuccess(true);
        setFormData({ nombre: "", telefono: "" });
        toast.success("¡Recibimos tu número de teléfono! Te contactaremos pronto.", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
      }
    } catch (err) {
      console.error("Error enviando el formulario:", err);
      toast.error("Tu número de teléfono no se ha enviado, vuelve a intentarlo mas tarde.", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              });
      setError("No se pudo enviar el mensaje. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="w-full px-5 lg:px-1 py-2 lg:py-15 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-7xl mx-auto">
      <section className="w-full py-5 max-w-4xl">
        {/* Título y descripción */}
        <motion.h2
          className="text-6xl md:text-6xl font-bold text-[#245565] break-words"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Soluciones en <span className="text-[rgb(184,63,15)] ">mantenimiento</span> y{" "}
          <span className="text-[#b83f0f] ">obra civil</span>.
        </motion.h2>
        <motion.p  className="text-base md:text-lg text-[#245565] font-bold mt-4"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}> 🚨Servicio de emergencias con atención en 1 hora 🚨</motion.p>
        <motion.p
          className="text-base md:text-lg text-slate-600"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Servicios confiables para inmuebles residenciales y empresariales. Electricidad, plomería, obra civil y más. 
        </motion.p>

        {/* Input + botón integrado */}
        <motion.form
  onSubmit={handleSubmit}  // ✅ Evita recarga y llama tu función
  className="mt-4 flex max-w-lg"
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <input
    type="tel"
    name="telefono"
    value={formData.telefono} // ✅ Estado controlado
    onChange={handleChange}  // ✅ Actualiza el estado
    placeholder="Ingresa tu número para recibir más información"
    className="flex-1 border border-slate-300 rounded-l-lg px-4 md:px-4 py-2 md:py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#d44d13]"
  />
  <button
    type="submit"
    disabled={loading} // opcional: evita doble clic
    className="bg-[#d44d13] text-white font-medium px-4 md:px-6 py-2 md:py-3 rounded-r-lg transition-all hover:bg-[#b83f0f] active:scale-95"
  >
    {loading ? "Enviando..." : "+ info"}
  </button>
</motion.form>


        {/* Bloques de información */}
        <motion.div
          className="hidden md:flex"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="md mt-12 grid grid-cols-1 md:grid-cols-4 gap-2">
            <div>
              <h4 className="text-2xl font-bold text-[#245565]">🏆 10+</h4>
              <p className="text-slate-600 mt-2 text-sm">
                Años de <br />
                experiencia
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#245565]">⚡ 1h</h4>
              <p className="text-slate-600 mt-2 text-sm">
                Atención a emergencias
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#245565]">🛡️ 24/7</h4>
              <p className="text-slate-600 mt-2 text-sm">
                Disponibilidad de servicio
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#245565]">📋</h4>
              <p className="text-slate-600 mt-2 text-sm">
                <a  href="/brochure_elsolucionador2025.pdf"
                  download="Portafolio-ElSolucionador.pdf"
                  className="flex flex-col items-start gap-1 hover:underline"
                >
                   <span>Descarga nuestro</span>
    <span className="flex items-center gap-1">
      <b>brochure</b>
      <Download className="h-4 w-4" />
    </span>
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <ShuffleGrid />

      
    </section>
  );
};

const shuffle = <T,>(array: T[]): T[] => {
  let currentIndex = array.length,
    randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData: SquareData[] = [
  { id: 1, src: "/home/1.jpeg" },
  { id: 2, src: "/home/2.jpeg" },
  { id: 3, src: "/home/3.jpeg" },
  { id: 4, src: "/home/4.jpeg" },
  { id: 5, src: "/home/5.jpeg" },
  { id: 6, src: "/home/6.jpeg" },
  { id: 7, src: "/home/7.jpeg" },
  { id: 8, src: "/home/8.jpeg" },
  { id: 9, src: "/home/9.jpeg" },
  { id: 10, src: "/home/10.jpeg" },
  { id: 11, src: "/home/11.jpeg" },
  { id: 12, src: "/home/12.jpeg" },
  { id: 13, src: "/home/13.jpeg" },
  { id: 14, src: "/home/14.jpeg" },
  { id: 15, src: "/home/15.jpeg" },
  { id: 16, src: "/home/16.jpeg" },
];

const generateSquares = (): React.ReactElement[] => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid: React.FC = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ✅ Inicia vacío (SSR = cliente) → evita error de hydration
  const [squares, setSquares] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    setSquares(generateSquares()); // genera en cliente

    const shuffleSquares = (): void => {
      setSquares(generateSquares());
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    shuffleSquares();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
