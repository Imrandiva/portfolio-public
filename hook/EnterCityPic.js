import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function EnterCityPic({ children, threshold }) {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: threshold ? threshold : 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
    //   controls.stop() // Stop the animation when out of view
    // controls.start("hidden");
    }
  }, [controls, inView])


  
  return (
    <motion.div
      ref={ref}
      animate={{ scale: inView ? 1 : 1.5 }} 
      transition={{ duration: 0.5, ease: "easeInOut"}}
    >
      {children}
    </motion.div>
  )
}
