import React from 'react'
import Testimonialsdata from '../../data/Testimonialsdata'
import Testcards from './Testcards'
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { useState, useRef, useEffect } from "react"


const Testimonials = ({refProp}) => {


  const [isMobile, setIsMobile] = useState(false)

useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 768) // Tailwind md breakpoint
  }

  checkScreen()
  window.addEventListener("resize", checkScreen)

  return () => window.removeEventListener("resize", checkScreen)
}, [])

    const x = useMotionValue(0)
const [isPaused, setIsPaused] = useState(false)

const speed = 50 // pixels per second

useAnimationFrame((time, delta) => {
  if (isPaused || isMobile) return

  const moveBy = (speed * delta) / 1000
  x.set(x.get() - moveBy)

  if (x.get() <= -trackWidth / 2) {
    x.set(0)
  }
})

const trackRef = useRef(null)
const [trackWidth, setTrackWidth] = useState(0)

useEffect(() => {
  if (trackRef.current) {
    setTrackWidth(trackRef.current.scrollWidth)
  }
}, [])


    const renderTestimonials = Testimonialsdata.map((card, index) => {
  return (
    <div key={index} className="snap-start">
      <Testcards  
        rating={card.rating}
        text={card.text}
        name={card.name}
        initials={card.initials}
        career={card.career}
      />
    </div>
  )
})

  return (
    <section ref={refProp} className='w-full scroll-mt-24 overflow-x-hidden'>
        <div className="w-[90%] lg:w-[80%] m-auto py-25">
            <h2 className='text-2xl lg:text-4xl text-center leading-[120%]'>Success Stories</h2>
            <p className='text-lg lg:text-xl md:w-[800px] md:m-auto text-center my-3 text-[#a4a0a0]'>
                Join hundreds of graduates who've transformed their careers.
            </p>

            {/* Grids */}
<div
className="w-full MyGradient mt-15 overflow-x-auto md:overflow-hidden snap-x snap-mandatory"  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <motion.div
  ref={trackRef}
  style={isMobile ? {} : { x }}
  className="flex gap-6 w-max"
>
    {renderTestimonials}
    {!isMobile && renderTestimonials}
  </motion.div>
</div>
</div>
    </section>
  )
}

export default Testimonials