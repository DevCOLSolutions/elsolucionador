'use client';
import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const EmergencyFloatingButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setShowTooltip(true);

      const hideTimer = setTimeout(() => setShowTooltip(false), 4000);
      return () => clearTimeout(hideTimer);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <div className="fixed bottom-20 right-4 z-50">
  {/* Tooltip */}
  {showTooltip && (
    <div className="absolute bottom-full right-0 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
      <p className="text-sm font-semibold whitespace-nowrap">
        🚨 EMERGENCIAS 24/7 - 1 HORA MAX
      </p>
      <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-red-600"></div>
    </div>
  )}

  {/* Botón */}
  <a
    href={`https://wa.me/573132841728?text=${encodeURIComponent(
      "🚨 EMERGENCIA 🚨 Necesito atención urgente. Por favor contactarme inmediatamente."
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Botón de emergencia"
    title="Emergencia 24/7"
    className={`flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 text-white px-2 py-2 rounded-full shadow-lg hover:from-red-700 hover:to-red-600 transition transform hover:scale-110 duration-300 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    onMouseEnter={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
  >
    <div className="relative">
      <AlertTriangle className="w-10 h-10 top-1 animate-pulse" />
      {/* Efecto de ondas */}
      <div className="absolute inset-0 rounded-full border-2 border-white opacity-75 animate-ping"></div>
      <div
        className="absolute inset-0 rounded-full border border-white opacity-50 animate-ping"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  </a>
</div>

  );
};