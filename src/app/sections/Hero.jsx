import heroImg from "../../../public/hero.webp"
import {motion} from "framer-motion"
export const Ero = () => {
    return (
      <section className="  flex max-xl:flex-col-reverse pt-10  justify-center max-w-[1600px] mx-auto  relative bg-black">
        {/* Contenedor de la imagen */}
        <div className=" 2xl:basis-6/12 w-full h-full relative z-10 ">
          <img 
            src={heroImg.src}
            alt="Historia de éxito"
            className="img h-full  mx-auto object-cover"
          />
        </div>
  
        {/* Contenido superpuesto */}
        <div className="relative z-20  xl:-ml-40 py-20  text-white">
          <div className="flex flex-col gap-4 max-xl:px-4">
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-8xl font-bold leading-tight max-xl:text-center"
            >
              De la adversidad <br />
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=" text-4xl md:text-6xl lg:text-8xl font-bold text-center max-sm:px-0 leading-tight px-40 ">
                al éxito
              </motion.span>
            
              <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-5xl max-xl:text-center  mt-8 "
            >
              Mi historia de transformación y crecimiento
            </motion.h2>
    
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white  max-lg:w-full max-xl:text-center xl:pr-10 "
            >
              De trabajador en una pizzería a fundador de múltiples negocios
              exitosos. Descubre cómo convertí mis fracasos en mi mayor fortaleza.
            </motion.p>
  
          </div>
        </div>
            <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          className="flex flex-col items-center justify-center transition tracking-wider text-zinc-400"
          href="#"
        >
          scroll to find more
          <i className="ri-arrow-drop-down-line text-2xl"></i>
        </a>
               </motion.div>
      </section>
    );
  };
  
