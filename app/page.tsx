import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Footer3 from '@/components/Footer3'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Testimonials />
      <Services />
      <CTA />
      <Projects />
      <Faq />
      <Footer3 />
      <Footer />
      <Footer2 />
    </div>
  )
}
 export default Home