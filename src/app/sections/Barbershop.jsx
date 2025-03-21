import { motion } from "framer-motion";
import barberImg from "../../../public/barber.webp";

export const Barbershop = () => {
  return (
    <section className="text-white w-full py-16 oscuro">
        <h2 className="text-white text-xl px-4 py-10">Mis negocios</h2>     
      <div className="flex gap-20  max-md:gap-12 max-lg:flex-col max-lg:container max-w-7xl  max-xl:px-4 mx-auto justify-between max-lg:gap-8">
        <div className=" epigrafe basis-6/12 pb-3">
          <img
            className=" w-full aspect-square  object-cover"
            src={barberImg.src}
            alt="Imagen de Barbershop"
          />
          <p className="text-xl text-white px-3 pt-3 pb-2">The Empire Barbershop</p>
          <span className="text-zinc-300 px-3
          ">Ubicación</span>
        </div>
        <div className=" max-md:px-4 flex flex-col justify-center  basis-6/12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4 tracking-tight text-white text-4xl max-sm:text-3xl"
            >
              The Empire Barbershop
            </motion.h2>
         
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl max-sm:text-xl text-white tracking-tight mb-3"
            >
              Donde el estilo y la experiencia se encuentran
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6 text-zinc-300 text-lg max-sm:text-base  md:text-xl"
            >
              Un espacio premium diseñado para quienes buscan más que un simple corte de cabello. Servicio de barbería de alto nivel con barberos expertos. 
              Ambiente exclusivo con una experiencia completa de lujo.
            </motion.p>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl max-sm:text-lg text-white tracking-wider negocio-descp"
            >
              Diferenciadores:
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-3 flex flex-col gap-3 px-3"
            >
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                 Productos de alta calidad.
                </span>
              </li>
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                  Servicio personalizado y asesoría de imagen.
                </span>
              </li>
              <li className=" list-disc">
                <span className="text-zinc-300 tracking-wider">
                  Ubicación estratégica y ambiente premium.
                </span>
              </li>
            </motion.ul>
       
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="my-10 flex items-center"
          >
            <a
              className="epigrafe hover:scale-105 transition duration-150 tracking-wider hover:bg-slate-300 text-white py-3 px-6 rounded-md xl:text-xl max-sm:text-sm max-lg:text-lg"
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