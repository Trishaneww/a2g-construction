"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/hooks/use-toast"
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
    <div className="flex flex-col lg:items-start items-center justify-center gap-4">

       <div className="flex flex-col gap-2 px-4 text-center xl:text-left xl:px-2">
            <p className="text-base lg:text-lg font-extrabold text-[#0860B3]">BOOK AN APPOINTMENT</p>
            <p className="font-semibold text-2xl md:text-4xl">Receive a Free Estimate</p>
        </div>


      <form className="w-[95%] lg:w-full flex flex-col items-center xl:items-start gap-4 px-2" onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-2 w-full">
            <div className="flex flex-col items-start w-full gap-2">
                <input 
                type="text" 
                name="full_name"
                placeholder="Full Name*"
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black"/>
                <p className="ml-1 text-red-600">{nameError}</p>
            </div>

            <div className="flex flex-col items-start w-full gap-2">
                <input 
                type="text" 
                name="email" 
                placeholder="Email*" 
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black"/>
                <p className="ml-1 text-red-600">{emailError}</p>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
                <input 
                type="text" 
                name="phone"
                placeholder="Phone"
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black"/>
            </div>
            <div className="flex flex-col items-start w-full gap-2">
                <input 
                type="text" 
                name="address" 
                placeholder="Address" 
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black"/>
            </div>
        </div>

          <div className="flex flex-col items-start w-full gap-2">
            <textarea placeholder="Tell us more about your project" name="message" className="w-full border-[1px] h-[100px] lg:h-[130px] border-slate-200 p-2 rounded-md outline-none"/>
          </div>      
          <Button type="submit" className="bg-slate-50 text-black h-[55px] px-10 mt-4 w-full">Request a Free Estimate</Button>
        </form>
    </div>
  )
}

export default ContactForm