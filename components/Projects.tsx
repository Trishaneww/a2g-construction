import { Renovations } from '@/data'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-12 bg-slate-900 py-20">
        <section className="flex flex-col items-center text-center w-[60%] text-slate-50">
            <p className="font-semibold text-3xl lg:text-5xl">Our Toronto Home renovation Services</p>
            <p className="text-lg mt-6">From kitchen renovations to condo and full home transformations, Astaneh Construction turns ideas into inspiring realities for our clients! Don’t forget to zoom in on the images, as every detail highlights the skill and dedication that make our renovation projects exceptional!</p>
        </section>

        <section className="grid grid-cols-2 gap-4">
            {Renovations.map((renovation, idx) => (
                <div className="relative bg-white slate border-[1px] border-gray-200 flex flex-col h-[420px] xl:h-[510px] lg:w-[470px] p-2 group">
                    <div className="relative bg-red-900 overflow-hidden h-[500px] ">
                    <Image
                        width={1000}
                        height={1000}
                        alt="logo image"
                        src={renovation.src1}
                        className="absolute top-0 w-full h-full object-cover group-hover:ml-[460px] duration-700 transition-all ease-in-out z-20" 
                    />

                    <Image
                        width={1000}
                        height={1000}
                        alt="logo image"
                        src={renovation.src2}
                        className="absolute top-0 w-full h-full object-cover z-10" 
                    />
                    </div>
                    
                    <div className="flex flex-col items-center justify-center p-2 px-6 mt-4">
                        <p className="text-2xl font-medium">{renovation.title}</p>
                        <p className="">{renovation.title2}</p>
                    </div>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Projects