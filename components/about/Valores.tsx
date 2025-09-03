import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Star,
  Eye,
  Users,
  ChevronDown,
  Sparkles,
} from "lucide-react";

type ValueCard = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  color: string;
};

const VALUES: ValueCard[] = [
  { 
    id: "rapidez", 
    title: "Rapidez", 
    subtitle: "Porque sabemos que el tiempo no espera", 
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-[#245565] to-[#245565]",
    color: "yellow"
  },
  { 
    id: "confiabilidad", 
    title: "Confiabilidad", 
    subtitle: "Tu tranquilidad es nuestra prioridad", 
    icon: <ShieldCheck className="h-6 w-6" />,
    gradient: "from-[#d44d13] to-[#d44d13]",
    color: "green"
  },
  { 
    id: "calidad", 
    title: "Calidad", 
    subtitle: "Cada trabajo refleja nuestro compromiso", 
    icon: <Star className="h-6 w-6" />,
    gradient: "from-[#245565] to-[#245565]",
    color: "purple"
  },
  { 
    id: "transparencia", 
    title: "Transparencia", 
    subtitle: "Presupuestos claros, sin sorpresas", 
    icon: <Eye className="h-6 w-6" />,
    gradient: "from-[#d44d13] to-[#d44d13]",
    color: "cyan"
  },
  { 
    id: "mision", 
    title: "Misión", 
    subtitle: "Nuestro proposito, nuestro objetivo", 
    icon: <Users className="h-6 w-6" />,
    gradient: "from-[#245565] to-[#245565]",
    color: "indigo"
  },
  { 
    id: "vision", 
    title: "Visión", 
    subtitle: "Así nos proyectamos al futuro:", 
    icon: <Users className="h-6 w-6" />,
    gradient: "from-[#d44d13] to-[#d44d13]",
    color: "indigo"
  },
];

type ValuesInteractiveProps = {
  className?: string;
};

export default function ValuesInteractive({ className = "" }: ValuesInteractiveProps) {
  const [active, setActive] = useState<string | null>(null);

  const getDetailText = (title: string) => {
    switch (title) {
      case "Rapidez":
        return "Intervenimos con agilidad y organización: coordinamos la llegada del técnico, evaluamos y resolvemos en el menor tiempo posible sin sacrificar calidad.";
      case "Confiabilidad":
        return "Trabajamos con procesos claros y garantías; nuestros técnicos actúan con respeto en tu hogar u oficina y documentan cada servicio.";
      case "Calidad":
        return "Utilizamos materiales y técnicas comprobadas para que cada reparación perdure en el tiempo y cumpla con los estándares profesionales.";
      case "Transparencia":
        return "Entregamos presupuestos detallados antes de ejecutar el trabajo y explicamos cada punto para que tomes decisiones informadas.";
      case "Misión":
        return "Proporcionar servicios de mantenimiento y reparación de la más alta calidad, con respuesta inmediata y atención personalizada, para que nuestros clientes puedan concentrarse en lo que realmente importa.";
    case "Visión":
        return " Ser la empresa líder en servicios express de mantenimiento, reconocida por nuestra excelencia, confiabilidad y compromiso con la satisfacción del cliente.";
      default:
        return "";
    }
  };

  return (
    <section className={`w-full relative overflow-hidden ${className}`} aria-labelledby="values-heading">
      {/* Background decoration */}
      
      
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          
          
          <motion.h2 
            id="values-heading" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#245565] via-[#245565] to-[#245565] bg-clip-text text-transparent mb-4"
          >
            Valores y Principios
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
          Los principios, objetivos y valores que guían cada uno de nuestros servicios y garantizan la excelencia en cada proyecto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {VALUES.map((v, index) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                onClick={() => setActive(active === v.id ? null : v.id)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`relative w-full text-left rounded-3xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-all duration-300 ${
                  active === v.id 
                    ? 'shadow-2xl shadow-indigo-500/25' 
                    : 'shadow-lg hover:shadow-xl'
                }`}
                aria-pressed={active === v.id}
              >
                {/* Card background with glassmorphism effect */}
                <div className="absolute inset-0 bg-white/80  backdrop-blur-xl border border-white/20"></div>
                
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${v.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  animate={active === v.id ? { opacity: 0.1 } : { opacity: 0 }}
                />
                
                {/* Glowing border effect */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${v.gradient} opacity-0 blur-sm`}
                  animate={active === v.id ? { opacity: 0.2 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon with animated background */}
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${v.gradient} text-white shadow-lg`}
                    >
                      {v.icon}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${v.gradient} opacity-60 blur-lg`}></div>
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900 ">
                          {v.title}
                        </h3>
                        
                        <motion.div
                          animate={active === v.id ? { rotate: 180 } : { rotate: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center gap-2"
                        >
                          <span className="text-xs font-medium text-gray-500 ">
                            {active === v.id ? "✖️" : "↕️"}
                          </span>
                          <ChevronDown className="h-4 w-4 text-gray-400" />
                        </motion.div>
                      </div>

                      <p className="text-gray-600  leading-relaxed mb-4">
                        {v.subtitle}
                      </p>

                      {/* Expandable content */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: active === v.id ? 1 : 0, 
                          height: active === v.id ? "auto" : 0 
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        {active === v.id && (
                          <div className="pt-4 border-t border-gray-200/50">
                            <p className="text-gray-700 eading-relaxed mb-6">
                              {getDetailText(v.title)}
                            </p>

                            <div className="flex flex-wrap gap-3">
                              <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="/contacto"
                                className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${v.gradient} px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                              >
                                <Sparkles className="h-4 w-4" />
                                Contactar
                              </motion.a>

                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActive(null);
                                }}
                                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 px-6 py-3 text-sm font-medium text-gray-700  hover:bg-gray-50  transition-all duration-300"
                              >
                                Cerrar
                              </motion.button>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Subtle shine effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)",
                  }}
                  animate={active === v.id ? { x: ["-100%", "100%"] } : {}}
                  transition={{ duration: 1.5, repeat: active === v.id ? Infinity : 0, repeatDelay: 2 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}