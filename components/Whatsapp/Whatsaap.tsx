import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export const WhatsAppFloatingButton = () => {
  return (
    <a
      href={`https://wa.me/573132841728?text=${encodeURIComponent(
        "¡Hola! 👋 Me gustaría solicitar más información sobre sus servicios ⚙️. ¡Gracias!"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center bg-green-500 text-white px-2 py-2 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-120 duration-300"
    >
      <FaWhatsapp className="w-10 h-10" />
    </a>
  );
};
