import { services } from '@/data'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className="flex flex-col mt-72 items-center gap-12">

      <section className="flex flex-col items-center text-center w-[60%]">
        <p className="font-semibold text-3xl lg:text-5xl">Our Toronto Home renovation Services</p>
        <p className="text-lg mt-6">From kitchen renovations to condo and full home transformations, Astaneh Construction turns ideas into inspiring realities for our clients! Don’t forget to zoom in on the images, as every detail highlights the skill and dedication that make our renovation projects exceptional!</p>
      </section>


      <section className="grid grid-cols-4 gap-4">
        {services.slice(0,8).map((service, idx) => (
          <div className="bg-white slate border-[1px] border-gray-200 flex flex-col h-[420px] xl:h-[510px] lg:w-[370px] shadow-lg" key={idx}>
            <div className="overflow-hidden">
              <Image
                src={service.src}
                width={1000}
                height={1000}
                alt="logo image"
                className="h-[280px] hover:scale-110 duration-500 transition-transform" 
              />
            </div>

            <div className="flex flex-col p-2 px-6">
             <p className="text-xl font-semibold">{service.title}</p>
             <p className="h-[240px] xl:h-[170px] mt-2">{service.desc}</p>
         </div>
          </div>
        ))}
        
      </section>

    </div>
  )
}

export default Services