import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Calculator } from 'lucide-react'
import Image from 'next/image'

const Footer3 = () => {
  return (
    <div className="w-full relative flex items-center justify-center py-32 px-6">
        <div className="flex flex-col items-center justify-center gap-2 z-10 text-slate-50 text-center">
          <p className="font-semibold text-2xl lg:text-4xl">LOOKING TO GET A QUOTE ON YOUR NEXT PROJECT?</p>
          <Link href="tel:416-895-5543" className="text-sm lg:text-lg">CALL US TODAY AT 647-938-0208 FOR A FREE CONSULTATION</Link>
          <Link href="/contact"><Button className="h-[55px] w-[300px] mt-8 text-black bg-slate-50">Get a Free Estimate<Calculator /></Button></Link>
        
        </div>
          <Image
          src="/assets/cta.png"
          width={1000}
          height={1000}
          alt="a2g construction logo"
          className="absolute top-0 w-full h-full object-cover"
        />
        <div className="absolute top-0 w-full h-full object-cover bg-black opacity-50"></div>
    </div>
  )
}

export default Footer3