import Areas from '@/components/Areas'
import CTA from '@/components/CTA'
import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import Footer3 from '@/components/Footer3'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Process from '@/components/Process'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Subpage from '@/components/Subpage'
import Testimonials from '@/components/Testimonials'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'
import GallerySection from '@/components/Gallery'

const Home = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Testimonials />
      <Subpage />
      <CTA />
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="process">
        <Process />
      </div>
      <Areas />
      <GallerySection />
      <div id="faq">
        <Faq />
      </div>
      <Footer3 />
      <Footer />
      <Footer2 />
      <Toaster />
    </div>
  )
}
 export default Home