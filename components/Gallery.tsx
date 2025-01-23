import { gallery } from '@/data'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, MoveUpRight } from 'lucide-react'
import Link from 'next/link'

const GallerySection = () => {
  return (
    <div className="flex flex-col items-center pt-20 ">
        <div className="w-[85%] lg:w-[65%]">
            <p className="font-smeibold text-3xl lg:text-4xl">SOME OF OUR LATEST WORK</p>
            <p className="font-light text-base lg:text-lg mt-4">We understand exactly what kind of experience, ease, and good service you are searching for, which is why we have positioned S & H to provide exactly the same. Take a glimpse at some of our previous projects to see the masterpieces we build. Please do not hesitate to contact us if you have additional queries about home remodeling in Los Angeles.</p>
            <Link href="/gallery" className="flex gap-2 items-center justify-start text-black mt-6 text-lg group hover:cursor-pointer">
                <p>VIEW COMPLETE GALLERY</p>
                <ArrowRight className="group-hover:ml-2 duration-300 ease-in-out transition-all"/>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full mt-8">
                {gallery.slice(0,3).map((image, idx) => (
                    <div className="bg-white slate border-[1px] border-gray-200 flex flex-col h-[420px] xl:h-[540px] lg:w-[370px] shadow-lg" key={idx}>
                        <div className="relative overflow-hidden h-[360px] lg:h-[480px]">
                            <Image
                                width={1000}
                                height={1000}
                                alt="logo image"
                                src={image.src}
                                className="absolute top-0 w-full h-full object-cover hover:scale-110 duration-500 transition-transform ease-in-out" 
                            />
                        </div>
                        <div className="flex flex-col p-2 px-6 py-6">
                        <p className="text-lg font-semibold">{image.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default GallerySection