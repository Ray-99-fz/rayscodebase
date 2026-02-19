import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import KPI from '../components/home/KPI'
import Carriculum from '../components/home/Carriculum'
import Testimonials from '../components/home/Testimonials'
import CTA from '../components/home/CTA'
import FAQ from '../components/home/FAQ'
import Footer from '../components/Footer'


const Home = () => {

    const carriculumRef = useRef(null)
    const testimonialsRef = useRef(null)
    const kpiRef = useRef(null)
    const faqRef = useRef(null)
    const logoRef = useRef(null)

    const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div>
      <Navbar 
        onLogoClick = {() => scrollToSection(logoRef)}
        onCarriculumClick = {() => scrollToSection(carriculumRef)}
        onTestimonialsClick = {() => scrollToSection(testimonialsRef)}
        onKPIClick = {() => scrollToSection(kpiRef)}
        onFAQClick = {() => scrollToSection(faqRef)}
      />

      <Hero 
        refProp = {logoRef} 
        onCarriculumClick = {() => scrollToSection(carriculumRef)}
    />
      <KPI refProp = {kpiRef} />
      <Carriculum refProp = {carriculumRef} />
      <Testimonials refProp = {testimonialsRef} />
      <CTA />
      <FAQ refProp = {faqRef} />
      <Footer />
    </div>
  )
}

export default Home