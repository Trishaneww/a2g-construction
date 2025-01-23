import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

const Subpage = () => {
  return (
    <div className="grid grid-cols-1 gap-12 lg:gap-0 w-full">
        <div className="flex flex-col lg:flex-row w-full h-[100vh] lg:h-[60vh]">
            <div className="h-full lg:w-1/2 relative">
                <Image
                    src="/assets/reno6.png"
                    width={1000}
                    height={1000}
                    alt="a2g construction logo"
                    className="absolute top-0 w-full h-full object-cover"
                />
            </div>
          
            <div className="flex flex-col lg:w-1/2 text-left items-start justify-center px-6 lg:px-32 gap-6 mt-20 lg:mt-0">
                <p className="text-4xl font-semibold">Bathroom Renovations</p>
                <p>Our bathroom renovation service turns outdated spaces into modern, functional retreats designed to match your style and needs. From custom layouts and premium fixtures to flawless tile work, we handle every detail with quality craftsmanship and care. Whether it’s a small update or a complete remodel, we create durable, elegant bathrooms that add value and comfort to your home, all while providing a stress-free experience.</p>
                <Link href="/contact"><Button className="w-[220px] h-[55px]">Get a Free Estimate</Button></Link>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse w-full h-[100vh] lg:h-[60vh]">
            <div className="h-full lg:w-1/2 relative">
                <Image
                    src="/assets/reno12.png"
                    width={1000}
                    height={1000}
                    alt="a2g construction logo"
                    className="absolute top-0 w-full h-full object-cover"
                />
            </div>
          
            <div className="flex flex-col lg:w-1/2 text-left items-start justify-center px-6 lg:px-32 gap-6 mt-20 lg:mt-0">
                <p className="text-4xl font-semibold">Basement Remodeling</p>
                <p>Our basement renovation service transforms underutilized spaces into beautiful, functional areas tailored to your needs. Whether you’re creating a cozy living space, a home office, or an entertainment hub, we handle every aspect, from custom layouts and insulation to lighting and flooring. With a focus on quality craftsmanship and smart design, we ensure your basement is both comfortable and durable. Let us help you maximize your home’s potential with a renovation that adds value and creates a space your family will love.</p>
                <Link href="/contact"><Button className="w-[220px] h-[55px]">Get a Free Estimate</Button></Link>
            </div>
        </div>
    </div>
  )
}

export default Subpage