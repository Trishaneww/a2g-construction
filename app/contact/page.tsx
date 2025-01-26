"use client"
import Footer2 from '@/components/Footer2'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useToast } from "@/components/hooks/use-toast"
import { Input } from '../../components/ui/input'
import { Checkbox } from '../../components/ui/checkbox'
import { Button } from '../../components/ui/button'
import { Textarea } from '../../components/ui/textarea'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Facebook, Instagram, MessageCircle, Phone, Star, Twitter, Youtube } from 'lucide-react'
import Image from 'next/image'

const images = [
  "/assets/service2.png",
  "/assets/reno1.png",
  "/assets/service1.png",
  "/assets/reno4.png",
  "/assets/reno6.png",
];

const Contact = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Explicitly type state as number

    const handleNext = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length); // Type prevIndex
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex: number) => (prevIndex - 1 + images.length) % images.length); // Type prevIndex
    };

    const [emailError, setEmailError] = useState("")
    const [nameError, setNameError] = useState("")
    
    const { toast } = useToast()
    const sendEmail = (e:any) => {
      e.preventDefault();
  
      try {
        console.log("hi")
        if (e.target.email.value === "" || e.target.full_name.value === "") {
  
            if (e.target.email.value === "") {
              setEmailError("Email is required")
              if (e.target.full_name.value === "") {
                setNameError("Fullname is required")
              }
            } 
   
        } else {
            emailjs.sendForm('service_27gc5nm', 'template_oa92t7i' , e.target , 'DIcorh4xby4Tb4Xbe');
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
    <div>
    <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-4 bg-[#FAFAFA] px-4 mt-6">
        <form onSubmit={sendEmail} className="xl:w-[40%] xl:h-[94vh] flex flex-col gap-2 rounded-2xl px-4 lg:px-10 py-2 pt-6 bg-white border-[1.5px] border-gray-200">
            <Link href="/">
                    <Image
                        width={110}
                        height={110}
                        src="/assets/logo4.png"
                        alt="Stephenson media logo"
                        className="rounded-lg"
                    />
            </Link>
            <div className="flex flex-col gap-2 mt-6">
                <h1 className="text-3xl lg:text-4xl font-semibold">Got ideas? We've got the skills. Lets team up.</h1>
                <p>Tell us more about yourself and what you've got in mind.</p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
                <p className="font-semibold">Service of Interest</p>
                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" name="basement" className=" border-gray-300" />
                        <p>Legal Basements</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" name="bathroom" className=" border-gray-300"/>
                        <p>Bathroom Renovations</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" name="decks" className=" border-gray-300"/>
                        <p>Decks & Fences</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" name="potlights" className=" border-gray-300"/>
                        <p>Indoor & Outdoor Potlights</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" name="painting" className="bg-slate-50 border-gray-300" />
                        <p>Painting (Interior & Exterior)</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" name="handyman" className=" border-gray-300"/>
                        <p>Handyman Services</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" name="flooring" className="bg-slate-50 border-gray-300" />
                        <p>Flooring</p>
                    </div>

                    <div className="flex gap-2 items-center w-[250px]">
                        <Checkbox id="terms" name="landscaping" className=" border-gray-300"/>
                        <p>Landscaping</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            <div className="flex flex-col items-start w-full gap-2">
                <Input 
                type="text" 
                name="full_name"
                placeholder="Full Name*"
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black placeholder:text-base"/>
                <p className="ml-1 text-red-600">{nameError}</p>
            </div>

            <div className="flex flex-col items-start w-full gap-2">
                <Input 
                type="text" 
                name="email" 
                placeholder="Email*" 
                className="w-full border-[1px] h-[40px] lg:h-[48px] border-slate-200 p-2 rounded-md outline-none text-black placeholder:text-base"/>
                <p className="ml-1 text-red-600">{emailError}</p>
            </div>

                <Input type="text" placeholder='Phone' name="phone" className="w-full h-[50px] p-2 placeholder:text-base focus-visible:ring-0"/>

                <Input type="text" placeholder='Address' name="address" className="w-full h-[50px] p-2 placeholder:text-base focus-visible:ring-0"/>
            </div>
            <Textarea placeholder="Tell us more about your project" name="message" className="mt-2 w-full h-[115px] p-2 placeholder:text-base focus-visible:ring-0" />
            <Button type="submit" className="w-full h-[55px] mt-12 text-lg">Lets get started!</Button>
        </form>

        
        <div className="relative w-full h-[600px] xl:h-[94vh] rounded-2xl mb-20">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute bottom-20 left-4 space-x-2 z-20 text-slate-50 flex flex-col gap-2 w-[80%]">
                <div className="flex gap-2">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p className="text-sm lg:text-lg">"A2G Construction went above and beyond to make sure every element of the renovation was perfect. From the sleek tile work to the custom vanity, their craftsmanship is second to none. They kept me updated throughout the project, so I always knew what to expect. I highly recommend their services!</p>
                <p className="font-semibold text-sm lg:text-lg mt-2">— Mike Redding</p>
            </div>



            <div className="absolute bottom-4 right-4 flex lg:space-x-2 z-20">
                <button
                    onClick={handlePrev}
                    className="bg-transparent text-white w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] px-3 py-2 rounded text-6xl flex justify-center items-center"
                >
                <ArrowLeft size={40}/>
                </button>
                <button
                    onClick={handleNext}
                    className="bg-transparent  text-white w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] px-3 py-2 rounded flex justify-center items-center"
                >
                <ArrowRight size={40}/>
                </button>
            </div>
            <div className="absolute top-0 w-full h-full bg-[#000000a7] backdrop-blur-[2px] z-0 opacity-60 rounded-2xl"></div>
        </div>
    </div>
    <Footer />
    <Toaster />
    </div>
  )
}
 export default Contact