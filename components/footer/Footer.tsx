import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500">

            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">

                <div className="md:max-w-96">

                    <img src="/logo_horizontal.svg" alt="" width={250} />

                    <p className="mt-6 text-sm">

                        El Solucionador ofrece más de 10 años de experiencia en mantenimiento locativo. Brinda servicios en electricidad, plomería, obra civil y más, con emergencias 24/7 y respuesta rápida en una hora.

                    </p>

                </div>

                <div className="flex-1 flex items-start md:justify-end gap-20">

                    <div>

                        <h2 className="font-semibold mb-5 text-gray-800">El Solucionador</h2>

                        <ul className="text-sm space-y-2">
  <li>
    <a href="#" className="hover:text-[#d44d13] transition-colors duration-200">
      Inicio
    </a>
  </li>
  <li>
    <a href="#" className="hover:text-[#d44d13] transition-colors duration-200">
      Nosotros
    </a>
  </li>
  <li>
    <a href="#" className="hover:text-[#d44d13] transition-colors duration-200">
      Servicios
    </a>
  </li>
  <li>
    <a href="#" className="hover:text-[#d44d13] transition-colors duration-200">
      ¿Por qué elegirnos?
    </a>
  </li>
  <li>
    <a href="#" className="hover:text-[#d44d13] transition-colors duration-200">
      Contácto
    </a>
  </li>
</ul>


                    </div>

                    <div>

                        <h2 className="font-semibold mb-5 text-gray-800">Contáctenos</h2>

                        <div className="text-sm space-y-2">

                            <p>+57 313 284 17 28</p>

                            <p className="break-words">elsolucionador2019@gmail.com</p>

                        </div>

                    </div>

                </div>

            </div>

            <p className="pt-4 text-center text-xs md:text-sm">

               © {new Date().getFullYear()} El Solucionador. Todos los derechos reservados.
      

                

            </p><p className="text-center text-xs pb-5">

               Hecho con 🧡 por <a href="https://devcolsolutions.com" target="_blank" rel="noopener noreferrer">DCS</a>.
      

                

            </p>
            

        </footer>
    </div>
  )
}

export default Footer
