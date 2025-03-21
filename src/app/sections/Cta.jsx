import Image from "next/image";
import ctaImg from "./../../../public/cta.webp";
import { motion } from "framer-motion";

export const Cta = () => {
  return (
    <section className="bg-gradient-to-r from-black to-slate-900 text-white w-full">
      <div className="grid grid-cols-2 max-md:gap-12 max-lg:flex max-lg:flex-col max-w-[1800px] mx-auto max-lg:gap-8">
        
        <div>
          <Image 
            className="image w-full h-[730px] max-sm:h-[365px] object-cover"
            src={ctaImg} 
            alt="Emprendedor exitoso" 
            priority
          />
        </div>

        <div className="px-12 max-lg:px-4 flex justify-center flex-col">
          <div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 negocio-title font-bold tracking-tight text-zinc-50 text-4xl max-sm:text-3xl text-balance">
              El éxito no es cuestión de suerte, es cuestión de decisión.
            </motion.h2>
            <motion.span
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r negocio-title from-slate-800 to-slate-400 w-24 h-1 flex mb-3 mt-3 text-slate-950">
              -
            </motion.span>
          
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl negocio-descp text-zinc-300 max-sm:text-lg max-md:text-lg tracking-wider mb-3">
              He recorrido un camino lleno de desafíos y aprendizajes, y ahora quiero compartir mis estrategias contigo. Ya sea que estés buscando inspiración, oportunidades de negocio o una nueva visión para tu futuro, este es el momento de actuar.
            </motion.p>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl negocio-descp text-zinc-300 max-sm:text-lg max-md:text-lg tracking-wider mb-6">Conéctate conmigo y transformemos juntos tu historia.
            </motion.p>
          </div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center mb-6">
            <a 
              className="bg-white xl:text-xl hover:scale-105 transition duration-150 max-sm:text-base max-lg:text-lg text-black py-3 px-6 rounded-md tracking-wider"
              href="#"
            >
              <i className="ri-phone-line text-xl"></i> Hablemos de negocios
            </a>
          </motion.div>
        </div>
    

      </div>
    </section>
  );
};
