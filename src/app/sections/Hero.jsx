import { motion } from "framer-motion";
import heroImg from "../../../public/hero.webp"
export const Hero = () => {
  return (
    <section className="text-white w-full  bg-black h-full
    ">
          <div className="flex flex-row-reverse max-lg:grid-cols-1  max-lg:flex-col max-w-[1600px]  mx-auto justify-between ">
     
            

            <div className=" basis-6/12 flex flex-col bg-black p-10 max-lg:p-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight max-lg:text-center"
            >
              De la adversidad <br />
            </motion.h1>
              <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-clip-text text-transparent bg-gradient-to-l from-white to-slate-400 text-4xl md:text-6xl lg:text-8xl font-bold leading-tight max-lg:text-center">
                al éxito
              </motion.span>
    
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl max-lg:text-center mt-6 "
            >
              Mi historia de transformación y crecimiento
            </motion.h2>
    
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-300 mt-4  lg:max-w-lg max-lg:w-full max-lg:text-center"
            >
              De trabajador en una pizzería a fundador de múltiples negocios
              exitosos. Descubre cómo convertí mis fracasos en mi mayor fortaleza.
            </motion.p>
          </div> 
              
          <img
                className="img basis-6/12 w-full h-screen object-cover oscuro"
                src={heroImg.src}
                alt="Imagen de Barbershop"
              />
              <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          className="flex flex-col items-center justify-center transition tracking-wider text-zinc-400"
          href="#"
        >
          scroll to find more
          <i className="ri-arrow-drop-down-line text-2xl"></i>
        </a>
      </motion.div>
          </div>
        </section>
  );
};

       