import { Renovations } from '@/data'
import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div className="flex flex-col items-center gap-12 bg-black py-20 lg:py-40 px-6">
        <section className="flex flex-col items-center text-center lg:w-[60%] text-slate-50">
            <p className="text-3xl lg:text-4xl font-black">OUR FEATURED TRANSFORMATION PROJECTS</p>
            <p className="text-base lg:text-lg mt-6 lg:w-[70%]">Explore our stunning before and after projects to see how we bring visions to life, turning outdated spaces into beautiful, functional areas you will love.</p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {Renovations.slice(0,3).map((renovation, idx) => (
                <div className="relative bg-white border-[1px] border-gray-200 flex flex-col h-[420px] xl:h-[510px] min-w-[320px] lg:w-[430px] p-2 group" key={idx}>
                    <div className="relative overflow-hidden h-[500px]">
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
                    
                    <div className="relative flex flex-col items-center justify-center p-2 px-6 mt-4">
                        <p className="text-lg lg:text-xl font-medium mt-3">{renovation.title2}</p>
                        <p className="text-sm">{renovation.title}</p>

                        <div className="flex gap-2 absolute -top-2 lg:left-[11.5rem] z-30">
                        <div className="w-[10px] h-[10px] bg-black rounded-full group-hover:bg-gray-300 duration-500 transition-all ease-in-out">
                            
                        </div>
                        <div className="w-[10px] h-[10px] bg-gray-300 rounded-full group-hover:bg-black duration-500 transition-all ease-in-out">
                            
                        </div>
                  
                    </div>
                    </div>
                </div>
            ))}
        </section>
    </div>
  )
}

export default Projects