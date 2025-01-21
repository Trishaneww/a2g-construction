import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-16 px-12 py-12 lg:h-[45vh]">
        <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
            <Image
                width={180}
                height={180} 
                src="/assets/google.png"
                alt="google business 5 star reviews"
            />
            <p>Our biggest worry was the disruption a kitchen remodel would cause, but S&H Construction and Design handled everything so smoothly. While there were a few unexpected challenges along the way, the team was quick to find solutions, keeping the project on track. The end result is better than we could have imagined.</p>
            <p>Mark T.</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
            <Image
                width={200}
                height={200} 
                src="/assets/houzz.png"
                alt="google business 5 star reviews"
            />
            <p>Our biggest worry was the disruption a kitchen remodel would cause, but S&H Construction and Design handled everything so smoothly. While there were a few unexpected challenges along the way, the team was quick to find solutions, keeping the project on track. The end result is better than we could have imagined.</p>
            <p>Mark T.</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center lg:w-[25%] gap-2">
            <Image
                width={200}
                height={200} 
                src="/assets/yelp.png"
                alt="google business 5 star reviews"
            />
            <p>Our biggest worry was the disruption a kitchen remodel would cause, but S&H Construction and Design handled everything so smoothly. While there were a few unexpected challenges along the way, the team was quick to find solutions, keeping the project on track. The end result is better than we could have imagined.</p>
            <p>Mark T.</p>
        </div>
    </div>
  )
}

export default Testimonials