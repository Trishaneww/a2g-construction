import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import ContactForm from './ContactForm'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center relative bg-red-900 h-[100vh] lg:h-[80vh] mt-20">
      <Image
        src="/assets/hero.png"
        width={1000}
        height={1000}
        alt="a2g construction logo"
        className="absolute top-0 w-full h-full object-cover"
       />

       <div className="absolute top-0 w-full h-full object-cover bg-black opacity-50"></div>

       <section className="lg:w-[65%] flex flex-col items-center mt-20 z-30 text-slate-50">
       <div className="flex flex-col items-center lg:items-start gap-4 lg:w-[70%]">
        <p className="text-lg font-semibold">Premium-Quality Home Remodeling!</p>
        <p className="font-semibold text-3xl lg:text-5xl text-center lg:text-left">Luxury Home Transformations With S & H Constructions</p>
        <Button className="w-[220px] h-[55px] bg-slate-50 text-black">Get a Free Estimate</Button>
       </div>
       </section>

       <div className="flex justify-center items-center relative h-full w-full lg:w-[75%]">
      <div
        className="relative w-full h-full bg-black opacity-0 lg:opacity-50 z-10"
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

export default Hero