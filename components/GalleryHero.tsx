import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import ContactForm from './ContactForm'
import Link from 'next/link'

const GalleryHero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center relative h-[100vh] lg:h-[80vh]">
      <Image
        src="/assets/cta.png"
        width={1000}
        height={1000}
        alt="a2g construction logo"
        className="absolute top-0 w-full h-full object-cover"
       />

       <div className="absolute top-0 w-full h-full object-cover bg-black opacity-50"></div>

       <section className="lg:w-[65%] flex flex-col items-center z-30 text-slate-50 mt-20 lg:mt-0 lg:ml-12">
       <div className="flex flex-col items-center lg:items-start gap-4 lg:w-[70%]">
        <p className="text-lg font-semibold">OUR GALLERY</p>
        <p className="font-semibold text-3xl lg:text-5xl text-center lg:text-left">Transformations You Will Be Proud to Call Your Own</p>
        <Link href="/contact">  <Button className="hidden lg:flex w-[220px] h-[55px] bg-[#2478c7] text-white hover:bg-slate-50 hover:text-[#2478c7] hover:border-[1px] hover:border-[#2478c7] mt-2">Get a Free Estimate</Button></Link>
       </div>
       </section>

       <div className="flex justify-center items-center relative h-full w-full lg:w-[75%]">
      <div
        className="relative w-full h-full bg-[#2478c7] opacity-0 lg:opacity-20 z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
        }}
      >
      </div>
      <div className="absolute inset-0 flex justify-center items-center text-white z-20 lg:pl-20">
          <ContactForm />
        </div>
    </div>
    
    </div>
  )
}

export default GalleryHero