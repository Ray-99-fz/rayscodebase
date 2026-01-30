import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import KPI from './components/KPI'
import Carriculum from './components/Carriculum'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <KPI />
      <Carriculum />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App