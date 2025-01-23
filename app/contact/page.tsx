"use client"
import Footer2 from '@/components/Footer2'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/hooks/use-toast"
import { Button } from '@/components/ui/button'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'

const Contact = () => {
    const [emailError, setEmailError] = useState("")
    const [nameError, setNameError] = useState("")
  
    const { toast } = useToast()
    const sendEmail = (e:any) => {
      e.preventDefault();
  
      try {
        if (e.target.email.value === "" || e.target.full_name.value === "" || e.target.address.value === "") {
  
            if (e.target.email.value === "") {
              setEmailError("Email is required")
              if (e.target.full_name.value === "") {
                setNameError("Fullname is required")
              }
            } 
   
        } else {
  
            emailjs.sendForm('service_luvg8op', 'template_sx6i957' , e.target , '1MxDwCSvQF6Leln4f');
             e.target.reset()
             setEmailError("")
             setNameError("")
  
            toast({
                title: "Email Sent",
                description: "We will get back to you shortly",
      })
  
        }
      } catch (err) {
        console.log(err)
      }
    }
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-8 mt-4 lg:mt-32 mb-44 justify-between items-center px-6 lg:px-24 font-light">

        <section className="flex flex-col gap-2 lg:w-[58%]">
            <p className="text-3xl lg:text-6xl font-semibold">Get a Free Estimate</p>
            <p className="text-base lg:text-lg lg:w-[60%] font-light mt-4">Once we receive the permits, our team will start the construction process of renovating your home. </p>
            <Link href='mailto:a2gconstructioninc@gmail.com' className="text-base lg:text-lg font-normal">a2gconstructioninc@gmail.com</Link>
            <Link className="text-base lg:text-lg font-normal" href="tel:647-938-0208">Call us 647-938-0208</Link>
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-10 mt-6">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Craftsmanship That Exceeds Expectations</p>
                    <p>Our skilled team delivers top-quality renovations with precision and attention to detail, ensuring every project meets the highest standards and brings your vision to life.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-bold">A Stress-Free Renovation Experience</p>
                    <p>From permits to construction, we handle every step of the process, keeping you informed and confident while creating a space you will love.</p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="font-bold">Custom Solutions Tailored to Your Needs</p>
                    <p>Every project is unique, and we take the time to understand your style, functionality, and goals to create a space that is perfectly suited to you.</p>
                </div>
            </div>
        </section>

        <form className="w-full lg:w-[500px] flex flex-col items-center xl:items-start gap-4 px-6 py-20 bg-white border-[1px] border-gray-200 rounded-2xl shadow-lg" onSubmit={sendEmail}>
        <p className="text-3xl font-semibold">Your Dream Renovation Starts With a Conversation
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full mt-6">
            <div className="flex flex-col items-start w-full gap-2">
                <input 
                type="text" 
                name="full_name"
                placeholder="Full Name*"
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black placeholder:text-base"/>
                <p className="ml-1 text-red-600">{nameError}</p>
            </div>

            <div className="flex flex-col items-start w-full gap-2">
                <input 
                type="text" 
                name="email" 
                placeholder="Email*" 
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black placeholder:text-base"/>
                <p className="ml-1 text-red-600">{emailError}</p>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
                <input 
                type="text" 
                name="phone"
                placeholder="Phone"
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black placeholder:text-base"/>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
                <input 
                type="text" 
                name="address" 
                placeholder="Address" 
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black placeholder:text-base"/>
            </div>
        </div>

          <div className="flex flex-col items-start w-full gap-2">
            <textarea placeholder="Tell us more about your project" name="message" className="w-full border-[1px] h-[100px] lg:h-[130px] border-slate-200 p-2 rounded-md outline-none placeholder:text-base text-black" />
          </div>      
          <Button type="submit" className="h-[55px] px-10 mt-4 w-full">Request a Free Estimate</Button>
        </form>

      </div>
      <Footer />
      <Footer2 />
      <Toaster />
    </div>
  )
}
 export default Contact