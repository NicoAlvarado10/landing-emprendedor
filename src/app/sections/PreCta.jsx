import preCtaImg from '../../../public/cta.jpg';
import { motion } from 'framer-motion';


export const PreCta = () => {
  return (
    <section className="text-white w-full py-16 oscuro">
      <div className="flex gap-20 max-md:gap-12 max-lg:flex-col max-lg:container max-w-7xl max-xl:px-4 mx-auto max-lg:gap-8">
        
        <div className=" epigrafe basis-6/12 pb-3">
          <img
            className=" w-full  object-cover aspect-square"
            src={preCtaImg.src}
            alt="Imagen de Emprendedor Exitoso"
          />
          <p className="text-xl text-white px-3 pt-3 pb-2">Jacob Hofstadter</p>
          <a className="text-zinc-300 cursor-pointer px-3 underline
          "> hello@hofstadter.com</a>
        </div>
        <div className=" max-md:px-4 flex flex-col justify-center  basis-6/12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 tracking-tight text-white text-4xl max-sm:text-3xl"
            >
              El éxito no es cuestión de suerte, es cuestión de decisión.

            </motion.h2>
         
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=" text-lg max-sm:text-base text-zinc-300 md:text-xl"
            >
              He recorrido un camino lleno de desafíos y aprendizajes, y ahora quiero compartir mis estrategias contigo. Ya sea que estés buscando inspiración, oportunidades de negocio o una nueva visión para tu futuro, este es el momento de actuar.
              Conéctate conmigo y transformemos juntos tu historia.
            </motion.p>
       
       
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="my-10 flex items-center"
          >
            <a
              className="epigrafe hover:scale-105 transition duration-150 tracking-wider text-white py-3 px-6 rounded-md xl:text-xl max-sm:text-sm max-lg:text-lg "
              href="#"
            >
              Hablemos de negocios
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};