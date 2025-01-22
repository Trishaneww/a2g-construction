import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Subpage = () => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:gap-0 w-full">
        <div className="flex flex-col lg:flex-row w-full h-[100vh] lg:h-[60vh]">
            <div className="h-full lg:w-1/2 relative">
                <Image
                    src="/assets/subpage.png"
                    width={1000}
                    height={1000}
                    alt="a2g construction logo"
                    className="absolute top-0 w-full h-full object-cover"
                />
            </div>
          
            <div className="flex flex-col lg:w-1/2 text-left items-start justify-center px-6 lg:px-32 gap-6 mt-20 lg:mt-0">
                <p className="text-4xl font-semibold">Kitchen Remodeling</p>
                <p>S & H Construction and Design is one of the leading companies for kitchen remodeling needs. We will responsibly execute all your kitchen makeover needs and handle the entire process of providing you with stunning and affordable results. From cabinet makeovers, and countertop installation to interior designing and lighting, our expert team precisely creates a functional area to serve all your culinary demands.</p>
                <Button className="w-[220px] h-[55px]">Get a Free Estimate</Button>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse w-full h-[100vh] lg:h-[60vh]">
            <div className="h-full lg:w-1/2 relative">
                <Image
                    src="/assets/subpage.png"
                    width={1000}
                    height={1000}
                    alt="a2g construction logo"
                    className="absolute top-0 w-full h-full object-cover"
                />
            </div>
          
            <div className="flex flex-col lg:w-1/2 text-left items-start justify-center px-6 lg:px-32 gap-6 mt-20 lg:mt-0">
                <p className="text-4xl font-semibold">Kitchen Remodeling</p>
                <p>S & H Construction and Design is one of the leading companies for kitchen remodeling needs. We will responsibly execute all your kitchen makeover needs and handle the entire process of providing you with stunning and affordable results. From cabinet makeovers, and countertop installation to interior designing and lighting, our expert team precisely creates a functional area to serve all your culinary demands.</p>
                <Button className="w-[220px] h-[55px]">Get a Free Estimate</Button>
            </div>
        </div>
    </div>
  )
}

export default Subpage