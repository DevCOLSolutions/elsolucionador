// src/components/GalleryAbout.tsx
import React from "react";

type GalleryAboutProps = {
  images: string[][]; // arreglo de columnas, cada columna contiene un arreglo de imágenes
};

const GalleryAbout: React.FC<GalleryAboutProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((col, colIdx) => (
        <div key={colIdx} className="grid gap-4">
          {col.map((src, imgIdx) => (
            <div key={imgIdx}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={`gallery-image-${colIdx}-${imgIdx}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GalleryAbout;
