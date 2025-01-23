import Image from 'next/image'
import React from 'react'


const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-16 px-6 lg:px-12 py-12 lg:h-[45vh]">
        <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
            <Image
                width={180}
                height={180} 
                src="/assets/google.png"
                alt="google business 5 star reviews"
            />
            <p className="lg:h-[150px]">"Our backyard feels like a whole new space thanks to the beautiful deck and sturdy fence they built for us. The team was professional, efficient, and the quality of their work is outstanding. We have already recommended them to friends!"</p>
            <p>- Karen L.</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
            <Image
                width={200}
                height={200} 
                src="/assets/houzz.png"
                alt="google business 5 star reviews"
            />
            <p  className="lg:h-[150px]">"Gerhard turned our dark, unfinished basement into a cozy family retreat. They listened to every detail of our vision and brought it to life with incredible craftsmanship. The entire process was smooth, and we could not be happier with the results!"</p>
            <p>- Mark T.</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
            <Image
                width={200}
                height={200} 
                src="/assets/yelp.png"
                alt="google business 5 star reviews"
            />
            <p className="lg:h-[150px]">"A2G Construction went above and beyond to make sure every element of the renovation was perfect. From the sleek tile work to the custom vanity, their craftsmanship is second to none. They kept me updated throughout the project, so I always knew what to expect. I highly recommend their services!</p>
            <p>- Sarah J.</p>
        </div>
    </div>
  )
}

export default Testimonials