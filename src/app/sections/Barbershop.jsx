import { motion } from "framer-motion";
import barberImg from "../../../public/barber.webp";

export const Barbershop = () => {
  return (
    <section className="text-white w-full bg-gradient-to-r from-black to-slate-900">
      <div className="grid grid-cols-2 max-md:gap-12 max-lg:grid-cols-1 max-w-[1800px] mx-auto max-lg:gap-8">
        <div>
          <img
            className="img w-full h-[730px] max-sm:h-[365px] object-cover"
            src={barberImg.src}
            alt="Imagen de Barbershop"
          />
        </div>
        <div className="px-12 max-md:px-4 flex flex-col justify-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 negocio-title font-bold tracking-tight text-white text-4xl max-sm:text-3xl"
            >
              <i className="ri-scissors-line text-xl text-white p-2 rounded-full bg-slate-800"></i> The Empire Barbershop
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r negocio-title from-slate-800 to-slate-400 w-24 h-1 flex mb-3 mt-3 text-slate-950"
            >
              -
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl max-sm:text-xl font-bold text-white tracking-tight negocio-subtitle mb-3"
            >
              Donde el estilo y la experiencia se encuentran
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6 text-lg max-sm:text-base negocio-descp text-zinc-300 md:text-xl"
            >
              Un espacio premium diseñado para quienes buscan más que un simple corte de cabello. Servicio de barbería de alto nivel con barberos expertos. 
              Ambiente exclusivo con una experiencia completa de lujo.
            </motion.p>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl max-sm:text-lg text-white tracking-wider negocio-descp"
            >
              Diferenciadores:
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-3 flex flex-col gap-3"
            >
              <li className="negocio-descp">
                <span className="text-zinc-300 tracking-wider">
                  <i className="ri-arrow-right-line text-white"></i> Productos de alta calidad.
                </span>
              </li>
              <li className="negocio-descp">
                <span className="text-zinc-300 tracking-wider">
                  <i className="ri-arrow-right-line text-white"></i> Servicio personalizado y asesoría de imagen.
                </span>
              </li>
              <li className="negocio-descp">
                <span className="text-zinc-300 tracking-wider">
                  <i className="ri-arrow-right-line text-white"></i> Ubicación estratégica y ambiente premium.
                </span>
              </li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-zinc-300 mt-3 tracking-wider negocio-descp"
            >
              <i className="ri-map-pin-line text-white"></i> Ubicación exclusiva en el centro de la ciudad
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="my-10 flex items-center"
          >
            <a
              className="bg-white hover:scale-105 transition duration-150 tracking-wider hover:bg-slate-300 text-black py-3 px-6 rounded-md xl:text-xl max-sm:text-sm max-lg:text-lg"
              href="#"
            >
              Reserva tu experiencia ahora
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};