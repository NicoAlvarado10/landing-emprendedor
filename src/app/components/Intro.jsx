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
      <div className=' overflow-hidden'>
        <motion.div style={{y}} className='relative '>
          {children}
        </motion.div>
      </div>
    )
}