import { areas } from '@/data'
import Link from 'next/link'
import React from 'react'

const Areas = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-slate-100 mt-12">
        <div className="flex flex-col gap-2 w-[85%] lg:w-[70%]">
            <p className="text-3xl lg:text-4xl">AREAS WE SERVICE</p>

            <section className="flex flex-col gap-4 mt-6 lg:mt-6">
                <p className="text-base lg:text-lg font-light">We proudly serve a wide range of areas, bringing expert construction and renovation services to homes and businesses across the region. Whether you are looking to renovate a bathroom, build a custom deck, or update your landscape, our team is ready to deliver top-quality results tailored to your needs.</p>
                <ul className="grid grid-cols-2 lg:grid-cols-5 gap-2">
                    {areas.map((area, idx) => (
                        <li className="font-normal" key={idx}>{area.name}</li>
                    ))}
                </ul>
            </section>

            <p className="text-base lg:text-lg font-light mt-6"><Link href="/contact" className="text-blue-500 font-semibold">Contact us</Link> today for a free consultation and make your renovation dreams a reality.</p>
        </div>
    </div>
  )
}

export default Areas