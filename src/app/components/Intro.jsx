'use client'
import { useScroll, useTransform, motion } from 'framer-motion';

import { useRef } from 'react';

export default function Intro({children}) {
    const container = useRef();
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"])
  
    return (
      <div className='h-screen overflow-hidden bg-gradient-to-r from-black to-slate-800'>
        <motion.div style={{y}} className='relative  h-screen'>
          {children}
        </motion.div>
      </div>
    )
}