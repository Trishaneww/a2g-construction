"use client"
import { services } from '@/data'
import Image from 'next/image'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/global.scss';

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
      
  const visibleCards = 3; // Number of visible cards at a time

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? services.length - visibleCards : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === services.length - visibleCards ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="flex flex-col mt-12 lg:mt-32 mb-20 items-center gap-12">

        <div className="flex flex-col items-center gap-2 w-full xl:w-[85%] max-w-[1200px] px-6">
          <section className="flex flex-col text-center items-center">
            <p className="text-3xl lg:text-4xl font-black">OUR HOME RENOVATION SERVICES</p>
            <p className="text-lg font-light mt-6 lg:w-[60%]">Discover our range of expert renovation and construction services, designed to bring your vision to life with precision, creativity, and lasting quality.</p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:hidden">
            {services.slice(0,8).map((service, idx) => (
              <div className="bg-white slate border-[1px] border-gray-200 flex flex-col max-w-[400px] h-[420px] xl:h-[540px] lg:w-[370px] shadow-lg" key={idx}>
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
                <p className="text-lg font-semibold">{service.title}</p>
                <p className="text-base font-light">{service.desc}</p>
                </div>
              </div>
            ))}
          </section>
          <div className="relative max-w-[95%] xl:max-w-[95%] xl:min-w-[1100px] max-h-full mx-auto mt-12">
          {/* Carousel Wrapper */}
          <div className="overflow-hidden">
            <div
              className="hidden lg:flex transition-transform duration-500 gap-4"
              style={{
                transform: `translateX(-${(activeIndex * 100) / visibleCards}%)`,
              }}
            >
                {services.map((service, idx) => (
                <div className="bg-white slate border-[1px] border-gray-200 flex flex-col h-[420px] xl:h-[580px] min-w-[calc(100%/1)] lg:min-w-[calc(100%/3.1)] shadow-lg" key={idx}>
                  <div className="overflow-hidden">
                  <Image
                    src={service.src}
                    width={1000}
                    height={1000}
                    alt="logo image"
                    className="h-[380px] hover:scale-110 duration-500 transition-transform" 
                  />
                </div>

                <div className="flex flex-col p-2 px-6 py-4">
                <p className="text-lg font-semibold">{service.title}</p>
                <p className="text-base font-light">{service.desc}</p>
                </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute top-1/2 left-0 transform -translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-900"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={handleNext}
            className="hidden lg:flex absolute top-1/2 right-0 transform translate-x-[120%] -translate-y-1/2 rounded-full p-2 text-slate-900"
          >
            <ChevronRight size={40} />
          </button>
        </div>

          
        </div>
    </div>
  )
}

export default Services