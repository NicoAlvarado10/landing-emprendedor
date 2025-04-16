
import { motion } from "framer-motion";

export const Cta = () => {
  return (
    <section className="bg-black py-36 text-white w-full">
      <div className="flex flex-col justify-center items-center max-lg:flex-col max-w-7xl mx-auto">
        

        <div className="px-12 max-lg:px-4 flex justify-center flex-col gap-4">
          <div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 tracking-tight text-white text-5xl max-sm:text-4xl text-center ">
              ¿ESTÁS LISTO PARA EL SIGUIENTE PASO?
            </motion.h2>
            
          
            <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl w-9/12 mx-auto text-center text-zinc-400 max-sm:text-xl max-md:text-3xl tracking-wider mb-3">
              The way you're going to move is quite dictated by your shoes.
            </motion.p>
           
          </div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center items-center mb-6">
            <a 
              className="bg-zinc-800 xl:text-xl hover:scale-105 transition duration-150 max-sm:text-base max-lg:text-lg text-white py-3 px-6 rounded-md tracking-wider"
              href="#"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
    

      </div>
    </section>
  );
};
