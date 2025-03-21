
import { motion } from "framer-motion";
export default function Content() {
    return (
      
   
        <footer className=" max-sm:pb-96 max-sm:py-40  pt-48 h-full max-sm:pt-96 max-lg:pb-20    flex justify-center flex-col oscuro text-zinc-300  ">
           
        <div className="mx-auto gap-12  flex justify-center  max-lg:flex-col px-4  max-lg:gap-11 max-w-7xl pb-8 flex-grow ">
        <motion.div
        initial={{ opacity: 0, y: 0 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay:0.2 }}
        className="flex flex-col gap-3 basis-4/12">
            <h2 className="text-8xl max-lg:text-6xl max-md:text-5xl text-white max-sm:text-3xl max-sm:pt-8  tracking-tight ">Jacob Hofstadter</h2>
            <a className="tracking-wider correo underline text-green-300">
            hello@hofstadter.com
            </a>
        </motion.div>
        <div className=" basis-8/12 grid grid-cols-3 max-xl:grid-cols-2 max-lg:grid-cols-1 gap-4 max-lg:gap-8">
        <motion.div
        initial={{ opacity: 0, y: 0 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay:0.4 }}
        className="flex flex-col gap-3">
            <h3 className="text-2xl max-md:text-xl text-white tracking-tight">Sobre Mí</h3>
            <p className="tracking-wider">
            Emprendedor, visionario y apasionado por crear oportunidades. Mi misión es inspirar a otros a alcanzar su máximo potencial.
            </p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col gap-3">
            <h3 className="text-2xl text-white tracking-tight max-md:text-xl">Mis Negocios</h3>
            <ul className="flex flex-col gap-2">
            <li>
                <a className="cursor-pointer tracking-wider hover:text-white transition duration-150" href="#">
                The Empire Barbershop
                </a>
            </li>
            <li>
                <a className="cursor-pointer tracking-wider hover:text-white transition duration-150" href="#">
                Joyería Exclusiva
                </a>
            </li>
            <li>
                <a className="cursor-pointer tracking-wider hover:text-white transition duration-150" href="#">
                Agencia Digital
                </a>
            </li>
            <li>
                <a className="cursor-pointer tracking-wider hover:text-white transition duration-150" href="#">
                Logística Aeronáutica
                </a>
            </li>
            </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col gap-3">
            <h3 className="text-2xl text-white max-md:text-xl">Contacto</h3>
            <p className="tracking-wider">
            ¿Interesado en colaborar o conocer más sobre mis proyectos? No dudes en contactarme.
            </p>
            <ul className="flex items-center gap-3">
            <li>
                <span className="text-2xl tracking-wider hover:text-white transition duration-150 cursor-pointer">
                <i className="ri-instagram-line"></i>
                </span>
            </li>
            <li>
                <span className="text-2xl tracking-wider hover:text-white transition duration-150 cursor-pointer">
                <i className="ri-facebook-circle-line"></i>
                </span>
            </li>
            <li>
                <span className="text-2xl tracking-wider hover:text-white transition duration-150 cursor-pointer">
                <i className="ri-twitter-x-line"></i>
                </span>
            </li>
            <li>
                <span className="text-2xl tracking-wider hover:text-white transition duration-150 cursor-pointer">
                <i className="ri-mail-line"></i>
                </span>
            </li>
            </ul>
        </motion.div>

        </div>

        </div>
        <p className="w-full copy py-7 border-t border-zinc-400 text-center tracking-wider">© 2025 Todos los derechos reservados.</p>
        </footer>
 
   

    )
  }
  
    
  
