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

const Home = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Testimonials />
      <Subpage />
      <CTA />
      <Services />
      <Projects />
      <Process />
      <Faq />
      <Footer3 />
      <Footer />
      <Footer2 />
      <Toaster />
    </div>
  )
}
 export default Home