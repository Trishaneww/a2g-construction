import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 text-center my-20">
        <Image
            width={180}
            height={180} 
            src="/assets/5stars.png"
            alt="google business 5 star reviews"
        />
        <p className="font-semibold text-3xl">Trusted by Thousands Across the Country</p>
        <p className="w-[60%]">Our experts have successfully completed more than approx 3900 kitchen renovations on time and within our client’s budget. Besides, we guarantee 100% customer satisfaction by ensuring that each and every project exceeds your expectations.</p>
        <Button className="w-[220px] h-[55px]">Get a Free Estimate</Button>

    </div>
  )
}

export default CTA