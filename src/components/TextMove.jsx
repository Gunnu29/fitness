import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function TextMove() {

  useGSAP(()=>{
    gsap.from(".que",{
      y:70,
      scrollTrigger:{
        trigger:".que",
        scrub:2,
        start:"top 75%",
        end:"top 70%"
      }
    })
  })

  return (
    <>
      <div className="relative w-full py-10 md:mb-4 lg:mb-4 parent mt-40 md:mt-0 lg:mt-0 ">

        {/* Heading */}
        <div className="que absolute 
                        lg:top-[-12%] md:top-[-1%] top-[-5%] 
                        left-[5%] 
                        text-black white-outline 
                        lg:tracking-wider md:tracking-wide tracking-normal 
                        font-black 
                        text-[30px] md:text-[45px] lg:text-[63px] 
                        w-[90%]">
            <h2 className='text-center'>WHAT ARE YOU WAITING FOR?</h2>
        </div>

        {/* Cards Container */}
        <div className="w-[90%] md:w-[85%] 
                        flex flex-col md:flex-row 
                        justify-center md:justify-between 
                        m-auto gap-6 mt-20 md:mt-0">

          {/* Card 1 */}
          <div className="group relative w-full md:w-[30%] h-[100px] md:h-[130px] 
                          rounded-2xl overflow-hidden 
                          text-center flex items-center justify-center 
                          text-xl md:text-3xl font-black 
                          bg-[#95C11E] shadow-xl cursor-pointer transition-all duration-500">
            
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('home-lessons.jpg')] bg-cover bg-center 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Text */}
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
              TOPTRACER RANGE
            </span>
          </div>

          {/* Card 2 */}
          <div className="group relative w-full md:w-[30%] h-[100px] md:h-[130px] 
                          rounded-2xl overflow-hidden 
                          text-center flex items-center justify-center 
                          text-xl md:text-3xl font-black 
                          bg-[#95C11E] shadow-xl cursor-pointer transition-all duration-500">
            
            <div className="absolute inset-0 bg-[url('home-lessons.jpg')] bg-cover bg-center 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
              GOLF LESSONS
            </span>
          </div>

          {/* Card 3 */}
          <div className="group relative w-full md:w-[30%] h-[100px] md:h-[130px] 
                          rounded-2xl overflow-hidden 
                          text-center flex items-center justify-center 
                          text-xl md:text-3xl font-black 
                          bg-[#95C11E] shadow-xl cursor-pointer transition-all duration-500">
            
            <div className="absolute inset-0 bg-[url('home-lessons.jpg')] bg-cover bg-center 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
              ADVENTURE GOLF
            </span>
          </div>

        </div>
      </div>
    </>
  )
}
