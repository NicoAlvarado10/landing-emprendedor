import  { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  
  useEffect(() => {

      gsap.registerPlugin(ScrollTrigger);
    
      const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <div className="scroll-section-outer  ">


      <div className="content-scroll" ref={triggerRef} >
        
      <h2 className="mb-4 mt-12 max-lg:mt-4 tracking-tight max-lg:px-4 text-white text-2xl md:text-5xl max-xl:text-center  m-auto max-xl:w-full max-md:px-2 text-center">
          Una Vida de Aprendizaje y Superación
        </h2>


        <div ref={sectionRef} className="scroll-section-inner mt-40  max-md:mt-0">
        <article className="rounded-2xl  max-w-7xl p-6 max-lg:w-full m-auto flex flex-col gap-2 ">
          <h3 className="mb-4 text-4xl  tracking-tight text-white max-sm:text-xl  max-lg:px-2">
            Del Sueño a la Realidad
          </h3>
          <p className="text-zinc-300 descp leading-7 max-2xl:px-2 tracking-wider text-xl max-sm:text-base  break-words">
            Desde pequeño, entendí que el mundo tenía algo más grande reservado para mí. Crecí viendo a mi familia
            esforzarse sin descanso, y eso encendió en mí una determinación inquebrantable. No quería vivir con
            limitaciones, sabía que mi destino dependía de mis decisiones.
          </p>
          <p className="text-zinc-300 descp  text-xl max-sm:text-base leading-7 max-2xl:px-2 tracking-wider ">
            Mi primer negocio lo inicié a los 14 años, negociando con el rector de mi colegio para pasear los perros
            de seguridad a cambio de un pago diario. También vendía dulces en la escuela, aprendiendo el valor de la
            venta y la estrategia. Pero no todo fue aciertos; en mi adolescencia me rodeé de personas que no compartían mis valores, lo que me llevó a tomar decisiones equivocadas. Sin embargo, dentro de mí siempre existió una voz que me recordaba que podía ir más lejos.
          </p>
      
        </article>
        <article className=" rounded-2xl  w-6xl p-6 max-lg:w-full m-auto flex flex-col gap-2 max-lg:px-4">
            <h3 className="mb-3  text-4xl text-white tracking-wider max-sm:text-xl">
            Primer Negocio, Primeras Lecciones
            </h3>
            <p className="text-zinc-300 leading-7 tracking-wider mb-2 text-xl max-sm:text-base ">
            Fundé una empresa de eventos y logística mientras trabajaba en el banco. Conseguí contratos importantes, incluso con la misma empresa donde trabajaba. Pero llegó un punto en el que tuve que elegir: estabilidad o independencia. Decidí renunciar.
            </p>
            <p className="text-zinc-300 leading-7 tracking-wider text-xl max-sm:text-base ">
            Al principio, todo parecía ir bien, pero sin una estructura financiera sólida, terminé gastando más de lo que generaba. Caí en una crisis financiera y emocional, tocando fondo. Solo, sin apoyo familiar y con deudas, enfrenté la peor etapa de mi vida.
            </p>
            <p className="text-zinc-300 leading-7 tracking-wider text-xl max-sm:text-base">
            Pero rendirse nunca fue una opción. Decidí salir del país y empezar de nuevo, con una mentalidad renovada y enfocada en la estrategia.
            </p>
          </article>
          <article className="  rounded-2xl  w-6xl p-6 max-lg:w-full m-auto flex flex-col gap-2 max-lg:px-4">
            <h3 className="mb-3 text-4xl text-white tracking-wider max-sm:text-xl">
               Renuncia, Fracaso y Renacimiento
            </h3>
            <p className="text-zinc-300 leading-7 tracking-wider mb-2 text-xl max-sm:text-base ">
            Fundé una empresa de eventos y logística mientras trabajaba en el banco. Conseguí contratos importantes, incluso con la misma empresa donde trabajaba. Pero llegó un punto en el que tuve que elegir: estabilidad o independencia. Decidí renunciar.
            </p>
            <p className="text-zinc-300 leading-7 tracking-wider text-xl max-sm:text-base ">
            Al principio, todo parecía ir bien, pero sin una estructura financiera sólida, terminé gastando más de lo que generaba. Caí en una crisis financiera y emocional, tocando fondo. Solo, sin apoyo familiar y con deudas, enfrenté la peor etapa de mi vida.
            </p>
            <p className="text-zinc-300 leading-7 tracking-wider text-xl  max-sm:text-base ">
            Pero rendirse nunca fue una opción. Decidí salir del país y empezar de nuevo, con una mentalidad renovada y enfocada en la estrategia.
            </p>
          </article>
          <article className=" rounded-2xl   w-6xl p-6 max-lg:w-full m-auto flex flex-col gap-4 max-lg:px-4">
            <h3 className="mb-3  text-4xl max-sm:text-xl   text-white tracking-wider ">
              Construyendo un Imperio
            </h3>
            <p className="text-zinc-300 leading-7 tracking-wider mb-2 text-xl max-sm:text-base">
            Aprendí que el éxito no solo es cuestión de pasión, sino de estrategia, disciplina y visión a largo plazo.
            </p>
            <p className="text-zinc-300 leading-7 tracking-wider text-xl max-sm:text-base">
            Hoy, lidero múltiples negocios:
            </p>
            <ul>
                <li className="lista text-zinc-300 leading-7 text-xl max-sm:text-base tracking-wider"><span><i className="ri-arrow-right-line"></i> Una empresa de joyería y exportación de oro y diamantes.</span></li>
                <li className="lista text-zinc-300 leading-7 tracking-wider text-xl max-sm:text-base"><span><i className="ri-arrow-right-line"></i> Una barbería premium.</span></li>
                <li className="lista text-xl max-sm:text-base text-zinc-300 leading-7 tracking-wider"><span><i className="ri-arrow-right-line"></i>Una agencia digital.</span></li>
                <li className="lista text-xl max-sm:text-base text-zinc-300 leading-7 tracking-wider"><span><i className="ri-arrow-right-line"></i>Una compañía de logística y venta de partes de aviones.</span></li>
            </ul>
          </article>
          
        </div>
      </div>
    </div>
  );
}

export default ScrollSection;