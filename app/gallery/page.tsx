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
        <p className="text-3xl lg:text-4xl">OUR RECENT RENOVATIONS</p>
        <p className="lg:w-[50%] mt-4">Browse our gallery of completed projects and see the craftsmanship, attention to detail, and quality that set us apart. Let these stunning transformations inspire your next project.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full lg:w-[65%] mt-8">
            {gallery.map((image, idx) => (
                <div className="relative overflow-hidden h-[360px] lg:h-[550px]" key={idx}>
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
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 px-6 lg:px-12 py-12 lg:h-[45vh] bg-slate-100">
              <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
                  <Image
                      width={180}
                      height={180} 
                      src="/assets/google.png"
                      alt="google business 5 star reviews"
                  />
                  <p className="h-[150px]">"Our backyard feels like a whole new space thanks to the beautiful deck and sturdy fence they built for us. The team was professional, efficient, and the quality of their work is outstanding. We have already recommended them to friends!"</p>
                  <p>- Karen L.</p>
              </div>
      
              <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
                  <Image
                      width={200}
                      height={200} 
                      src="/assets/houzz.png"
                      alt="google business 5 star reviews"
                  />
                  <p  className="h-[150px]">"Gerhard turned our dark, unfinished basement into a cozy family retreat. They listened to every detail of our vision and brought it to life with incredible craftsmanship. The entire process was smooth, and we could not be happier with the results!"</p>
                  <p>- Mark T.</p>
              </div>
      
              <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
                  <Image
                      width={200}
                      height={200} 
                      src="/assets/yelp.png"
                      alt="google business 5 star reviews"
                  />
                  <p className="h-[150px]">"A2G Construction went above and beyond to make sure every element of the renovation was perfect. From the sleek tile work to the custom vanity, their craftsmanship is second to none. They kept me updated throughout the project, so I always knew what to expect. I highly recommend their services!</p>
                  <p>- Sarah J.</p>
              </div>
          </div>
      <Footer />
      <Footer2 />
      <Toaster />
    </div>
  )
}
 export default Gallery