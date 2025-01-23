"use client"
import { navItems, services } from '@/data'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from './ui/button'
import '../styles/global.scss';
import React, { useState } from 'react';
import '../styles/global.scss';
import { NavDropDown } from './Navdropdown'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <div className="flex w-full justify-between lg:justify-center items-center h-[100px] px-6 md:p-6 navbar self-center scroll-smooth z-50  bg-black">
        <div className="flex lg:gap-12 justify-start lg:justify-center items-center w-full px-2">
          <Link href='/' className={cn(
                "relative dark:text-slate-50 items-center flex space-x-1 text-slate-50  hover:text-[#0860B3]"
              )}>
                <span className="!cursor-pointe">
                  <Image
                    src="/assets/logo2.png"
                    width={150}
                    height={150}
                    alt="a2g construction logo"
                    className="-ml-6 mt-[1px]"
                  />
                  {/* <p className="font-semibold tracking-wide text-base lg:text-2xl">A2G CONSTRUCTION</p> */}
              </span>
          </Link>

          {/* <Link href='/'><span className="text-l font-bold">Argus Doctors</span>
          </Link> */}
        
          {navItems.slice(0,4).map((navItem: any, idx: number) => (
            <Link 
              key={idx} 
              href={navItem.link}
              className={cn(
                "hidden lg:flex relative dark:text-slate-50 items-center space-x-1 text-slate-50  hover:text-[#54acff]"
              )}
            >
              <span className="!cursor-pointer">{navItem.title}</span>
            </Link>
          ))}
          <NavDropDown />

          {navItems.slice(4,6).map((navItem: any, idx: number) => (
            <Link 
              key={idx} 
              href={navItem.link}
              className={cn(
                "hidden lg:flex relative dark:text-slate-50 items-center space-x-1 text-slate-50  hover:text-[#64b4ff]"
              )}
            >
              <span className="!cursor-pointer">{navItem.title}</span>
            </Link>
          ))}

          <Link href="tel:647-938-0208">
          <Button className="w-[220px] h-[50px] text-base bg-[#2478c7] hidden lg:flex hover:bg-slate-50 hover:text-[#2478c7] hover:border-[1px] hover:border-[#2478c7]">Call us 647-938-0208</Button>
          </Link>
        </div>


        <nav className="lg:hidden">
    <input type="checkbox" id="sidebar-active" />
    <label htmlFor="sidebar-active" className="open-sidebar-button text-slate-50 mt-2">
      <Menu />
    </label>
    <label id="overlay" htmlFor="sidebar-active"></label>
    <div className="links-container bg-black text-slate-50">
      <label htmlFor="sidebar-active" className="close-sidebar-button relative left-56 text-slate-50">
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> */}
        <X />
       
      </label>

      {/* <label htmlFor="sidebar-active" className="close-sidebar-button">
      <a href="/#testimonials">Testimonials</a>
      </label> */}

      <a href="/">Home</a> 
      <a href="/gallery">Gallery</a> 
      <a href="/#projects">Featured Projects</a>
      <a href="/#process">Process</a>
      <div className="flex w-full p-4 text-slate-50 text-base -mt-8">
          <Accordion type="single" collapsible className="flex flex-col gap-2">
                    <AccordionItem value={`services`} className="border-none p-4 rounded-2xl">
                    <AccordionTrigger className="text-base lg:text-lg text-left font-normal -ml-[3px] mt-6">Services</AccordionTrigger>
                        <AccordionContent className="text-base lg:text-lg">
                        {services.map((accordion:any, idx:number) => (
                          <Link href={accordion.link} className="text-slate-50 -mt-4" key={idx}>{accordion.title}</Link>
                        ))}
                        </AccordionContent>
                    </AccordionItem>
        </Accordion>
      </div>
      <a href="/#faq">FAQ</a> 
      <Link href="tel:647-938-0208">
          <Button className="w-[220px] h-[50px] text-base bg-[#2478c7] hover:bg-slate-50 hover:text-[#2478c7] hover:border-[1px] hover:border-[#2478c7]">Call us 647-938-0208</Button>
        </Link>

     
    </div>
  </nav>
   
    </div>
  )
}

export default Navbar