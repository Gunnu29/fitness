import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Cards() {

  useGSAP(()=>{
    gsap.from(".anim_card",{
      opacity:0,
      duration:3,
      stagger:1,
      scale:0.5,
      y:50,
      scrollTrigger:{
        trigger:".anim_card",
        scrub:1,
         start: "top 95%",
        end: "top 65%"
      }
    })
  })

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row md:flex-col gap-15 place-content-center md:items-center bg-black lg:h-[500px] md:h-full mt-40 z-10 relative">
        {/* Card 1 */}
        <div className="anim_card relative lg:w-[25%] md:w-[80%] rounded-xl overflow-hidden group">
          {/* Image */}
          <img src="home-toptracer.jpg" alt="" className="lg:h-[500px] md:h-full w-full object-cover rounded-xl" />
          
          {/* Always visible text */}
          <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6 ">
            TOPTRACER RANGE
          </div>

          {/* Hover overlay with lorem text */}
          <div className="absolute inset-0 bg-[#95C11E] bg-opacity-90  px-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-10">
          <div className="flex justify-end">

            <img src="next.png" alt="" className='w-[15%]' />
            </div>
            <p className='font-extrabold text-3xl pt-10'>
              TOPTRACER RANGE
            </p>
            <p className='mt-5 text-lg'>Our range delivers the same ball-tracking technology that traces the shots of the game's best players on TV.
              <br />
              <p className='pt-5 text-lg'>Toptracer Range technology offers a fun engaging, tech-driven experience that appeals to seasoned players, range rivals, 
              friends, family members, and even first-time golfers.</p>
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="anim_card relative lg:w-[25%] md:w-[80%] rounded-xl overflow-hidden group">
          <img src="hero-4.jpg" alt="" className="h-[500px] w-full object-cover rounded-xl" />
          <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6 ">
            <span className='text-lg'>MR MULLIGAN'S</span> ADVENTURE <br /> GOLF
          </div>
            <div className="absolute inset-0 bg-[#95C11E] bg-opacity-90  px-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-10">
          <div className="flex justify-end">

            <img src="next.png" alt="" className='w-[15%]' />
            </div>
            <p className='font-extrabold text-3xl pt-10'>
              ADVENTURE GOLF
            </p>
            <p className='mt-5 text-lg'>Adventure awaits you!
              <br />
              <p className='pt-5 text-lg'>Become a Jurassic explorer as you delve into the lands of the dinosaur! Putt your way through prehistoric landscape,
                cascading waterfalls and meet some dinosaur friends along the way.
              </p>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="anim_card relative lg:w-[25%] md:w-[80%] rounded-xl overflow-hidden group">
          <img src="home-lessons.jpg" alt="" className="h-[500px] w-full object-cover rounded-xl" />
          <div className="absolute text-white bottom-5 font-extrabold text-3xl pl-6 ">
            GOLF LESSONS
          </div>
           <div className="absolute inset-0 bg-[#95C11E] bg-opacity-90  px-6 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-10">
            <div className="flex justify-end">

            <img src="next.png" alt="" className='w-[15%]' />
            </div>
            <p className='font-extrabold text-3xl pt-10'>
              GOLF LESSONS
            </p>
            <p className='mt-5 text-lg '>
             Passionate about player development, whether you are new to the game or an aspiring pro, we offer both groups
              and individual lessons tailored to you with the sole focus of helping you reach your goals.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}
