import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import ContactForm from './ContactForm'
import Link from 'next/link'

const GalleryHero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center relative min-h-[calc(100vh-100px)] lg:min-h-0 lg:h-[80vh] py-12 lg:py-0">
      <Image
        src="/assets/cta.png"
        width={1000}
        height={1000}
        alt="a2g construction logo"
        className="absolute top-0 w-full h-full object-cover"
       />

       <div className="absolute top-0 w-full h-full object-cover bg-black opacity-50"></div>

       <section className="w-full lg:w-[65%] flex flex-col items-center z-30 text-slate-50 px-6 lg:px-0 lg:mt-0 lg:ml-12">
       <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-[70%]">
        <p className="text-lg font-semibold">OUR GALLERY</p>
        <p className="font-semibold text-3xl lg:text-5xl text-center lg:text-left">Transformations You Will Be Proud to Call Your Own</p>
        <Link href="/contact">  <Button className="hidden lg:flex w-[220px] h-[55px] bg-[#2478c7] text-white hover:bg-slate-50 hover:text-[#2478c7] hover:border-[1px] hover:border-[#2478c7] mt-2">Get a Free Estimate</Button></Link>
       </div>
       </section>

       <div className="flex justify-center items-center relative w-full h-auto lg:h-full lg:w-[75%] mt-10 lg:mt-0">
      <div
        className="hidden lg:block relative w-full h-full bg-[#2478c7] opacity-20 z-10"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
        }}
      >
      </div>
      <div className="relative lg:absolute lg:inset-0 w-full flex justify-center items-center text-white z-20 px-6 lg:px-0 lg:pl-20">
          <ContactForm />
        </div>
    </div>

    </div>
  )
}

export default GalleryHero