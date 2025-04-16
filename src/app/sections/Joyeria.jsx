import joyeriaImg from '../../../public/joyeria.jpg';
import { motion } from 'framer-motion';


export const Joyeria = () => {
  return (
    <section className="text-white w-full py-16 oscuro">
      <div className="flex  gap-20 max-md:gap-12 max-lg:flex-col-reverse max-lg:container max-w-7xl max-xl:px-4 mx-auto max-lg:gap-8">
        <div className=" max-md:px-4 flex flex-col justify-center  basis-6/12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 tracking-tight text-white text-4xl "
            >
              Joyería Exclusiva
            </motion.h2>
         
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl  text-white tracking-tight negocio-subtitle mb-3"
            >
              Brillando en el mundo de la joyería y la exportación de oro y diamantes
            </motion.h3>
            
            
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-3 flex flex-col text-lg gap-3 px-3"
            >
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                Un negocio basado en confianza, lujo y calidad.
                </span>
              </li>
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                Exportación de piezas de alto valor y diseño exclusivo.
                </span>
              </li>
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                Red de contactos y proveedores globales.
                </span>
              </li>
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                Certificación y autenticidad garantizada.
                </span>
              </li>
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                Diseño de piezas personalizadas.
                </span>
              </li>
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                Enfoque en la exclusividad y el lujo.
                </span>
              </li>
            </motion.ul>
       
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="my-10 flex items-center"
          >
            <a
              className="epigrafe hover:scale-105 transition duration-150 tracking-wider text-white py-3 px-6 rounded-md xl:text-xl max-sm:text-base max-lg:text-lg "
              href="#"
            >
              Reserva tu experiencia ahora
            </a>
          </motion.div>
        </div>
        <div className=" epigrafe basis-6/12 pb-3">
          <img
            className=" w-full  object-cover aspect-square"
            src={joyeriaImg.src}
            alt="Imagen de Joyeria"
          />
          <p className="text-xl text-white px-3 pt-3 pb-2">Joyería Exclusiva</p>
          <span className="text-zinc-300 px-3
          ">Ubicación</span>
        </div>
      </div>
    </section>
  );
};