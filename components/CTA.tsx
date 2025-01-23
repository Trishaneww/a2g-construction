import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 text-center py-20 bg-slate-100">
        <Image
            width={180}
            height={180} 
            src="/assets/5stars.png"
            alt="google business 5 star reviews"
        />
        <p className="font-semibold text-3xl">Trusted by Homeowners and Businesses Alike</p>
        <p className="w-[95%] lg:w-[60%]">Join the many satisfied clients who have chosen us for their construction and renovation needs. With a proven track record of delivering exceptional results, we’re the team you can rely on for quality craftsmanship, transparent communication, and projects completed on time and within budget. Let us bring your vision to life!</p>
        <Link href="/contact"><Button className="w-[220px] h-[55px]">Get a Free Estimate</Button></Link>

    </div>
  )
}

export default CTA