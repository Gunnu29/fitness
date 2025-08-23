import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {

useGSAP(()=>{
  gsap.from(".about",{
    opacity:0,
    duration:1,
    y:100,
    scrollTrigger:{
      trigger:".about",
      scrub:1,
       start: "top 80%",
      end: "top 65%"
    }
  })

  gsap.from(".imgs",{
    opacity:0,
    duration:1,
    x:100,
     scrollTrigger:{
      trigger:".imgs",
      scrub:1,
       start: "top 70%",
    end: "top 65%"
    }
  })

   gsap.from(".Limgs",{
    opacity:0,
    duration:1,
    x:-100,
     scrollTrigger:{
      trigger:".Limgs",
      scrub:1,
       start: "top 70%",
    end: "top 65%"
    }
  })

})

  return (
    <>
      {/* Scrolling Marquee Section */}
      <div className="w-full relative z-50 lg:mt-20  h-[200px] text-6xl lg:text-8xl md:text-8xl sm:text-6xl text-black bg-transparent font-black white-outline">
        <div className="marquee-container">
          <div className="marquee-track">
            <span className="mr-7 hover:text-[#95C11E]">TOPTRACER RANGE</span>
            <span className="mr-7 hover:text-[#95C11E]">GOLF LESSONS</span>
            <span className="mr-7 hover:text-[#95C11E]">ADVENTURE GOLF</span>
            <span className="mr-7 hover:text-[#95C11E]">CAFE</span>
            <span className="mr-7 hover:text-[#95C11E]">EVENTS</span>

            <span className="mr-7 hover:text-[#95C11E]">TOPTRACER RANGE</span>
            <span className="mr-7 hover:text-[#95C11E]">GOLF LESSONS</span>
            <span className="mr-7 hover:text-[#95C11E]">ADVENTURE GOLF</span>
            <span className="mr-7 hover:text-[#95C11E]">CAFE</span>
            <span className="mr-7 hover:text-[#95C11E]">EVENTS</span>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="relative z-50  w-full">
        <div className="relative z-50 w-[85%] text-white lg:justify-between items-center flex flex-col lg:flex-row md:flex-col sm:flex-col  mx-auto">
          
          {/* Left Image */}
          <div className="Limgs lg:w-[12%] relative md:w-[50%] md:mb-10 mb-10">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-1-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
              className="w-full lg:h-[140px] md:h-full rounded-xl object-cover "
            />
            <div className="bg-black/30 w-full h-full absolute top-0 left-0"></div>
          </div>

          {/* Text Content */}
          <div className=" about lg:w-[55%] md:w-[80%]">
            <h1 className="text-4xl font-black text-center">ABOUT US</h1>
            <p className="mt-8 text-center leading-8 text-xl">
              Home to a 46-bay, multi-tier, floodlit driving range, powered by Toptracer Range technology. Complimented by a practice green and bunker, coffee shop and American Golf Store. There truly is something for everyone as we also boast two outdoor 18-hole dinosaur themed crazy golf courses.
            </p>
            <p className="mt-8 text-center leading-8 text-xl relative z-50">
              Please note: we are a cashless venue. The range closes at 10pm with last balls at 9pm.
            </p>
          </div>

          {/* Right Image */}
          <div className="imgs lg:w-[11%] relative md:w-[50%] md:pt-10 pt-10">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/home-about-2-300x200.jpg?strip=all&lossy=1&sharp=1&ssl=1"
              alt=""
              className="w-full lg:h-[170px] md:h-full rounded-xl object-cover"
            />
            <div className="bg-black/30 top-0 left-0 w-full h-full absolute"></div>
          </div>

        </div>
      </div>
    </>
  );
}
