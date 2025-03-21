import joyeriaImg from '../../../public/joyeria.webp';
import { motion } from 'framer-motion';
export const Joyeria = () => {
  return (
    <section className="bg-gradient-to-l from-black to-slate-900 w-full">
      <div className="grid grid-cols-2 max-md:gap-12 max-lg:flex max-lg:flex-col-reverse max-w-[1800px] mx-auto max-lg:gap-8">
        <div className="px-12 max-md:px-4 flex flex-col justify-center">
          <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 negocio-title font-bold tracking-tight text-white max-sm:text-3xl text-4xl">
            <i className="ri-vip-diamond-line text-2xl text-white p-2 rounded-full bg-slate-800"></i> Joyería Exclusiva
          </motion.h2>

          <motion.span
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r negocio-title from-slate-800 to-slate-400 w-24 h-1 flex mb-3 mt-3 text-slate-950">
            -
          </motion.span>

          <motion.h3
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl max-sm:text-xl font-bold negocio-subtitle text-white tracking-tight">
            Brillando en el mundo de la joyería y la exportación de oro y diamantes
          </motion.h3>

          <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-3 flex flex-col gap-3 mb-2">
            <li className="negocio-descp">
              <span className="text-zinc-300 tracking-wider">
                <i className="ri-arrow-right-line text-white"></i> Un negocio basado en confianza, lujo y calidad.
              </span>
            </li>
            <li className="negocio-descp">
              <span className="text-zinc-300 tracking-wider">
                <i className="ri-arrow-right-line text-white"></i> Exportación de piezas de alto valor y diseño exclusivo.
              </span>
            </li>
            <li className="negocio-descp">
              <span className="text-zinc-300 tracking-wider">
                <i className="ri-arrow-right-line text-white"></i> Red de contactos y proveedores globales.
              </span>
            </li>
            <li className="negocio-descp">
              <span className="text-zinc-300 tracking-wider">
                <i className="ri-arrow-right-line text-white"></i> Certificación y autenticidad garantizada.
              </span>
            </li>
            <li className="negocio-descp">
              <span className="text-zinc-300 tracking-wider">
                <i className="ri-arrow-right-line text-white"></i> Diseño de piezas personalizadas.
              </span>
            </li>
            <li className="negocio-descp">
              <span className="text-zinc-300 tracking-wider">
                <i className="ri-arrow-right-line text-white"></i> Enfoque en la exclusividad y el lujo.
              </span>
            </li>
          </motion.ul>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="my-10 flex items-center">
            <a
              className="bg-white hover:scale-105 transition duration-150 tracking-wider hover:bg-slate-300 text-black py-3 px-6 rounded-md xl:text-xl max-sm:text-sm max-lg:text-lg"
              href="#"
            >
              Explora nuestras colecciones
            </a>
          </motion.div>
        </div>

        <div>
          <img
            className="joya w-full h-[730px] max-sm:h-[365px] object-cover"
            src={joyeriaImg.src}
            alt="Imagen de Emprendedor Realizando una Llamada"
          />
        </div>
      </div>
    </section>
  );
};
