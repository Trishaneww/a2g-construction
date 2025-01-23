import Footer from '@/components/Footer'
import Footer2 from '@/components/Footer2'
import GalleryHero from '@/components/GalleryHero'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'
import { Toaster } from '@/components/ui/toaster'
import { gallery } from '@/data'
import Image from 'next/image'
import React from 'react'

const Gallery = () => {
  return (
    <div className="flex flex-col scroll-smooth bg-[#FAFAFA]">
      <Navbar />
      <GalleryHero />
      <section className="flex flex-col gap-2 items-center justify-center py-20 text-center px-6">
        <p className="text-3xl lg:text-4xl">OUR RECENT PROJECTS</p>
        <p className="lg:w-[50%] mt-4">Browse our gallery of completed projects and see the craftsmanship, attention to detail, and quality that set us apart. Let these stunning transformations inspire your next project.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:w-[75%] mt-8">
            {gallery.map((image, idx) => (
                <div className="relative overflow-hidden h-[360px] lg:h-[450px]" key={idx}>
                    <Image
                        width={1000}
                        height={1000}
                        alt="logo image"
                        src={image.src}
                        className="absolute top-0 w-full h-full object-cover" 
                    />
                </div>
            ))}
        </div>
      </section>
      <Testimonials />
      <Footer />
      <Footer2 />
      <Toaster />
    </div>
  )
}
 export default Gallery