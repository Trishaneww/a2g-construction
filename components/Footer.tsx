import { areas, services } from '@/data'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-start gap-16 py-12 px-6">
        <section className="flex flex-col max-w-[400px]">
            <p className="font-semibold text-lg">COMPANY</p>
            <ul className="flex flex-col gap-2 mt-6">
                <li className="tracking-wide text-3xl font-semibold">A2G CONSTRUCTION</li>
                <li className="text-sm">A2GConstruction Is Fully Insured And Licensed And Can Undertake All Home Renovation And Home Improvement Projects.</li>
            </ul>
        </section>

        <section className="flex flex-col">
            <p className="font-semibold text-lg">SERVICES</p>
            <ul className="flex flex-col gap-2 mt-6">
                {services.map((service) => (
                    <li key={service.id}>{service.title}</li>
                ))}
            </ul>
        </section>


        <section className="flex flex-col">
            <p className="font-semibold text-lg">SERVICE AREA</p>
            <ul className="flex flex-col gap-2 mt-6">
                {areas.slice(0,8).map((area,idx) => (
                    <li key={idx}>{area.name}</li>
                ))}
            </ul>
        </section>


        <section className="flex flex-col">
            <p className="font-semibold text-lg">CONNECT WITH US</p>
            <ul className="flex flex-col gap-2 mt-6">
                <Link href='mailto:a2gconstructioninc@gmail.com'>a2gconstructioninc@gmail.com</Link>
                <li>@a2gconstructioninc</li>
                <li>647-938-0208</li>
                <div className="flex gap-2">
                    <Link href="/" className="flex justify-center items-center rounded-full h-[50px] w-[50px] bg-white border-[1px] border-gray-200 text-black">
                        <Instagram  />
                    </Link>
                    <Link href="/" className="flex justify-center items-center rounded-full h-[50px] w-[50px] bg-white border-[1px] border-gray-200 text-black">
                        <Facebook  />
                    </Link>
                    <Link href="/" className="flex justify-center items-center rounded-full h-[50px] w-[50px] bg-white border-[1px] border-gray-200 text-black">
                        <Twitter />
                    </Link>
                </div>
            </ul>
        </section>
        
    </div>
  )
}

export default Footer