import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
export default function Content() {
    return (
      
   
        <footer className="  pt-60  bg-gradient-to-r  flex justify-end flex-col  from-black to-slate-900 text-zinc-300 h-full ">
            <h2 className=" flex justify-center max-sm:justify-end items-center text-center text-7xl max-md:text-3xl italic pb-56 max-lg:pb-24 max-sm:pb-8 px-4 bg-clip-text text-transparent bg-gradient-to-t from-white to-slate-300"><TypeAnimation
  sequence={['¿ESTÁS LISTO PARA EL SIGUIENTE PASO?', 
    1000,'',  1000,  ] }
    speed={50} // Velocidad de escritura
    deleteSpeed={40} // Velocidad de borrado
    repeat={Infinity} 
  

/></h2>
        <div className="mx-auto  grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 px-4 gap-36 max-lg:gap-11 max-w-7xl pb-8">
        <motion.div
        initial={{ opacity: 0, y: 0 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay:0.2 }}
        className="flex flex-col gap-3">
            <h3 className="text-2xl max-md:text-xl text-white tracking-tight">Sobre Mí</h3>
            <p className="tracking-wider">
            Emprendedor, visionario y apasionado por crear oportunidades. Mi misión es inspirar a otros a alcanzar su máximo potencial.
            </p>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
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
        <p className="w-full copy py-7 border-t border-zinc-400 text-center tracking-wider">© 2025 Todos los derechos reservados.</p>
        </footer>
 
   

    )
  }
  
    
  
