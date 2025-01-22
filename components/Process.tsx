import { processData } from '@/data'
import React from 'react'

const Process = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center mt-20 px-6">
        <section className="flex flex-col lg:w-1/4 gap-4 text-center lg:text-left">
            <p className="font-semibold text-3xl">OUR PROCESS</p>
            <p className="lg:w-[85%]">Astaneh Construction commits to overseeing every aspect of your construction or renovation project. Here is a brief overview of how it works.</p>
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