import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="flex justify-center items-center relative bg-red-900 h-[80vh] mt-20">
      <Image
        src="/assets/hero.png"
        width={1000}
        height={1000}
        alt="a2g construction logo"
        className="absolute top-0 w-full h-full object-cover"
       />

       <div className="absolute top-0 w-full h-full object-cover bg-black opacity-50"></div>

       <section className="w-[55%] flex flex-col items-center z-30 text-slate-50">
       <div className="flex flex-col gap-4 w-[60%]">
        <p className="text-lg font-semibold">Premium-Quality Home Remodeling!</p>
        <p className="font-semibold text-5xl">Luxury Home Transformations With S & H Constructions</p>
        <Button className="w-[220px] h-[55px] bg-slate-50 text-black">Get a Free Estimate</Button>
       </div>
       </section>



       <div className="flex justify-center items-center relative h-full w-[45%]">
      <div
        className="relative w-full h-full bg-black opacity-50"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center text-white font-bold">
          
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Hero