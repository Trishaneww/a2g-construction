"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/hooks/use-toast"
import Link from 'next/link';
import contactform from '../public/assets/images/form.png';
import '../styles/global.scss';


const ContactForm = () => {

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
    <div className="flex flex-col xl:flex-row items-center justify-center gap-24 bg-slate-100 pb-28 py-28">

      <section className="min-w-[320px] w-1/4 xl:min-w-[400px]">
        <Image
          src={contactform}
          alt="contact form process"
          className="rounded-xl"
        />
      </section>


      <section className="flex flex-col">

      {/* <div className="flex flex-col gap-2 px-4 text-center xl:text-left xl:px-2">
        <p className="text-2xl md:text-4xl font-semibold lg:text-6xl">Receive a Free Estimate</p>
        <p className="text-base md:text-lg">Have a project in mind that you think we would be a great fit for? We’d love to connect with you and learn more!</p>
      </div> */}
       <div className="flex flex-col gap-2 px-4 text-center xl:text-left xl:px-2">
            <p className="text-base  lg:text-xl font-extrabold text-[#0860B3] secondary">BOOK AN APPOINTMENT</p>
            <p className="font-bold text-3xl md:text-4xl lg:text-6xl secondary">Receive a Free Estimate</p>
        </div>


      <form className="w-full flex flex-col items-center xl:items-start  gap-4 -mt-4 px-2" onSubmit={sendEmail}>
        <div className="flex flex-col lg:flex-row w-5/6  xl:w-full justify-start lg:justify-center items-start lg:items-center gap-2 mt-8">
        <div className="flex flex-col items-start w-full lg:w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Full Name</p>
            <input 
              type="text" 
              name="full_name"
              placeholder="Full Name*"
              className="w-full border-[1px] h-[48px] border-slate-200 p-2 rounded-md outline-none"/>
              <p className="ml-1 text-red-600">{nameError}</p>
          </div>

          <div className="flex flex-col items-start w-full lg:w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Email</p>
            <input 
              type="text" 
              name="email" 
              placeholder="Email*" 
              className="w-full border-[1px] h-[48px] border-slate-200 p-2 rounded-md outline-none"/>
              <p className="ml-1 text-red-600">{emailError}</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-5/6 xl:w-full justify-start lg:justify-center items-start lg:items-center gap-2">
        <div className="flex flex-col items-start w-full lg:w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Phone</p>
            <input 
              type="text" 
              name="phone"
              placeholder="Phone"
              className="w-full border-[1px] h-[48px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>


          <div className="flex flex-col items-start w-full lg:w-5/6 gap-2">
            <p className="flex justify-start text-slate-900">Address</p>
            <input 
              type="text" 
              name="address" 
              placeholder="Address" 
              className="w-full border-[1px] h-[48px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>
        </div>

          {/* <div className="flex flex-col items-start w-5/6 gap-2">
        
            <input 
              type="text" 
              name="company"
              placeholder="Company Name" 
              className="w-full border-[1px] h-[44px] border-slate-200 p-2 rounded-md outline-none"/>
          </div> */}
          
          <div className="flex flex-col items-start w-5/6 xl:w-full gap-2">
            <p className="flex justify-start text-slate-900">Message</p>
            <textarea placeholder="Tell us more about your project" name="message" className="w-full border-[1px] h-[230px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>      
          <Button type="submit" className="bg-[#0860B3] h-[60px] text-lg px-10 mt-6">Request a Free Estimate</Button>
        </form>
      </section>
    </div>
  )
}

export default ContactForm