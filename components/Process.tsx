import { processData } from '@/data'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Process = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center mt-20 px-6">
        <section className="flex flex-col lg:w-[30%] gap-4 text-center items-center lg:items-start lg:text-left">
            <p className="text-3xl lg:text-4xl">OUR PROCESS</p>
            <p className="lg:w-[85%]">From the first site visit to the moment your project is complete, we walk you through each step of the process, handling everything from permits to construction, so you can feel confident and stress-free throughout the entire journey.</p>
            <Link href="/contact"><Button className="w-[220px] h-[55px]">Get a Free Estimate</Button></Link>
        </section>

        <section className="grid grid-cols-1 gap-12 bg-white border-[1px] border-slate-200 shadow-lg p-10 py-14 lg:w-[800px] mt-10 lg:mt-0">
            <div className="flex flex-col lg:flex-row gap-8">
                {processData.slice(0,2).map((process) => (
                    <div className="lg:w-1/2 h-[250px] lg:h-[200px] flex flex-col gap-4" key={process.id}>
                        <div className="flex items-end gap-4">
                            <p className="font-semibold text-5xl lg:text-6xl text-[#0860B3]">{process.id}</p>
                            <p className="font-semibold text-xl lg:text-2xl">{process.title}</p>
                        </div>
                        <p className="h-[150px]">{process.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                {processData.slice(2,4).map((process) => (
                    <div className="lg:w-1/2 h-[250px] lg:h-[200px] flex flex-col gap-4" key={process.id}>
                        <div className="flex items-end gap-4">
                            <p className="font-semibold text-5xl lg:text-6xl text-[#0860B3]">{process.id}</p>
                            <p className="font-semibold text-xl lg:text-2xl">{process.title}</p>
                        </div>
                        <p className="h-[150px]">{process.desc}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                {processData.slice(4,6).map((process) => (
                    <div className="lg:w-1/2 h-[250px] lg:h-[200px] flex flex-col gap-4" key={process.id}>
                        <div className="flex items-end gap-4">
                            <p className="font-semibold text-5xl lg:text-6xl text-[#0860B3]">{process.id}</p>
                            <p className="font-semibold text-xl lg:text-2xl">{process.title}</p>
                        </div>
                        <p className="h-[150px]">{process.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Process