import Image from "next/image";
import { motion } from "framer-motion";
export const Hero = () => {
  return (
    <section className="text-white w-full bg-gradient-to-r from-black to-slate-800 ">
      <div className="grid w-full grid-cols-2 max-md:gap-12 max-lg:grid-cols-1 max-w-[1800px] mx-auto max-lg:gap-8 max-sm:gap-6">
        {/* Texto */}
        <div className="px-12 max-md:px-4 flex flex-col justify-center">
          <div className="flex flex-col">
            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
             className=" text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white max-lg:text-center max-lg:pt-8">
              De la adversidad <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-l from-white to-slate-400">
                al éxito
              </span>
            </motion.h1>

            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8,delay:0.2 }}
            className=" text-3xl max-sm:text-2xl mb-6 text-white max-lg:text-center">
              Mi historia de transformación y crecimiento
            </motion.h2>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay:0.4 }}
            className="text-xl md:text-2xl hero-descp text-zinc-300 max-lg:text-center">
              De trabajador en una pizzería a fundador de múltiples negocios
              exitosos. Descubre cómo convertí mis fracasos en mi mayor
              fortaleza.
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay:0.6 }}
            className="my-10 flex items-center max-lg:justify-center">
              <a
                className="a bg-white hover:scale-105 transition duration-150 tracking-wider hover:bg-slate-300 text-black py-3 px-6 rounded-md xl:text-xl max-sm:text-sm max-lg:text-lg"
                href="#"
              >
                Descubre mi historia
              </a>
            </motion.div>
          </div>
        </div>

        {/* Imagen */}
        <div>
          <Image
            className="w-full img h-[730px] max-sm:h-[365px] object-cover"
            src="/hero.webp"
            alt="Imagen de Emprendedor Exitoso"
            width={1800}
            height={730}
            priority // Carga rápida
          />
        </div>
      </div>
    </section>
  );
};
