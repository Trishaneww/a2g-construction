import { services } from '@/data'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col mt-12 lg:mt-32 mb-20 items-center gap-12 px-6">

      <section className="flex flex-col items-center text-center lg:w-[60%]">
        <p className="font-semibold text-3xl lg:text-5xl">Our Toronto Home renovation Services</p>
        <p className="text-lg mt-6">From kitchen renovations to condo and full home transformations, Astaneh Construction turns ideas into inspiring realities for our clients! Don’t forget to zoom in on the images, as every detail highlights the skill and dedication that make our renovation projects exceptional!</p>
      </section>


      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {services.slice(0,6).map((service, idx) => (
          <div className="bg-white slate border-[1px] border-gray-200 flex flex-col h-[420px] xl:h-[410px] lg:w-[370px] shadow-lg" key={idx}>
            <div className="overflow-hidden">
              <Image
                src={service.src}
                width={1000}
                height={1000}
                alt="logo image"
                className="h-[340px] hover:scale-110 duration-500 transition-transform" 
              />
            </div>

            <div className="flex flex-col p-2 px-6 py-4">
             <p className="text-xl font-semibold">{service.title}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 -mt-6">
        {services.slice(6,8).map((service, idx) => (
          <div className="bg-white slate border-[1px] border-gray-200 flex flex-col h-[420px] xl:h-[410px] lg:w-[560px] shadow-lg" key={idx}>
            <div className="overflow-hidden">
              <Image
                src={service.src}
                width={1000}
                height={1000}
                alt="logo image"
                className="h-[340px] hover:scale-110 duration-500 transition-transform" 
              />
            </div>

            <div className="flex flex-col p-2 px-6 py-4">
             <p className="text-xl font-semibold">{service.title}</p>
            </div>
          </div>
        ))}
      </section>


    </div>
  )
}

export default Services