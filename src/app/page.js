'use client'
import { Barbershop } from "./sections/Barbershop";
import { Cta } from "./sections/Cta";
import Footer from "./sections/Footer";
import Intro from "./components/Intro";
import  {History}  from "./sections/History";
import { Joyeria } from "./sections/Joyeria";
import 'remixicon/fonts/remixicon.css'
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Hero } from "./sections/Hero";
import ScrollSection from "./components/ScrollSection";


export default function Home() {
  
 

  useEffect( () => {

    const lenis = new Lenis()



    function raf(time) {

      lenis.raf(time)

      requestAnimationFrame(raf)

    }



    requestAnimationFrame(raf)

  }, [])
  
  
  return (
    <main >
      <Intro>
        <Hero/>
      </Intro>
      <History/>   
      <Barbershop/>

      <Joyeria/>
      <Cta/>
      <Footer/>
    </main>

  );
}
