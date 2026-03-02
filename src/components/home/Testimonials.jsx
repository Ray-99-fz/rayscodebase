import React from 'react'
import Testimonialsdata from '../../data/Testimonialsdata'
import Testcards from './Testcards'
import { motion, useMotionValue, useAnimationFrame } from "framer-motion"
import { useState, useRef, useEffect } from "react"


const Testimonials = ({refProp}) => {

  const [activeIndex, setActiveIndex] = useState(0)
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
    <div key={index} className="snap-start min-w-[300px]">
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
  ref={trackRef}
  onScroll={(e) => {
    if (!isMobile) return

    const container = e.currentTarget
    const scrollLeft = container.scrollLeft
    const cardWidth = container.firstElementChild.offsetWidth + 24
    const index = Math.round(scrollLeft / cardWidth)

    setActiveIndex(index)
  }}
  className="w-full MyGradient mt-15 overflow-x-auto snap-x snap-mandatory md:overflow-hidden"
  onMouseEnter={() => setIsPaused(true)}
  onMouseLeave={() => setIsPaused(false)}
>
  <motion.div
    style={isMobile ? {} : { x }}
    className="flex gap-6 w-max"
  >
    {renderTestimonials}
    {!isMobile && renderTestimonials}
  </motion.div>
</div>
{/* 👇 Scroll Indicators (Mobile Only) */}
{isMobile && (
  <div className="flex justify-center mt-6 gap-2 md:hidden">
    {Testimonialsdata.map((_, index) => (
      <div
        key={index}
        className={`h-2 w-2 rounded-full transition-all duration-300 ${
          activeIndex === index
            ? "bg-indigo-500 w-5"
            : "bg-gray-300"
        }`}
      />
    ))}
  </div>
)}
</div>
    </section>
  )
}

export default Testimonials