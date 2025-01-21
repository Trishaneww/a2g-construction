import { services } from '@/data'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-start gap-16 py-12 px-6">
        <section className="flex flex-col max-w-[400px]">
            <p className="font-semibold text-lg">COMPANY</p>
            <ul className="flex flex-col gap-2 mt-6">
                <li className="tracking-wide text-3xl font-semibold">A2G CONSTRUCTION</li>
                <li className="text-sm">Astaneh Construction Is Fully Insured And Licensed And Can Undertake All Home Renovation And Home Improvement Projects.</li>
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
                {services.map((service) => (
                    <li key={service.id}>{service.title}</li>
                ))}
            </ul>
        </section>


        <section className="flex flex-col">
            <p className="font-semibold text-lg">CONNECT WITH US</p>
            <ul className="flex flex-col gap-2 mt-6">
                <li>hydraguardconstruction@gmail.com</li>
                <li>@hydraguardconstruction</li>
                <li>416-895-5543</li>
            </ul>
        </section>
        
    </div>
  )
}

export default Footer