import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

export default function Quote() {

  useGSAP(()=>{

    // Left quote moves much more inward
    gsap.fromTo(".Lcolon",
      { x: -70, y: -70, opacity: 0.5 },   // start further outside
      { 
        x: 120, y: 50, opacity: 1,          // moves deeper towards text
        scrollTrigger: {
          trigger: ".quote-section",
          scroller: "body",
          start: "top 80%",   // when section enters
          end: "top 20%",     // when leaving section
          scrub: true,
          // markers: true,
        }
      }
    );

    // Right quote moves much more inward
    gsap.fromTo(".colon",
      { x: 70, y: 70, opacity: 0.5 },     // start further outside
      { 
        x: -120, y: -50, opacity: 1,        // moves deeper towards text
        scrollTrigger: {
          trigger: ".quote-section",
          scroller: "body",
          start: "top 80%",
          end: "top 20%",
          scrub: true,
          // markers: true,
        }
      }
    );

  })

  return (
    <>
    <div className="quote-section relative bg-black w-full h-[600px] pt-40">
      <div className="w-[60%] h-[600px] mx-auto bg-black">
        <img 
          src="quote-left.svg" 
          alt="" 
          className='w-[20%] h-[30px] Lcolon absolute left-[-3%] top-20'
        />
        <p className='text-white text-[25px] font-bold text-center'>
          Excellent couple of hours, relax and enjoy in the fun. Staff were accommodating, 
          friendly and very helpful. Café on site for refreshments etc. Will keep children 
          enterntained during the holidays. Worth a visit if you haven’t been.
        </p>
        <img 
          src="quote-right.svg" 
          alt="" 
          className='w-[20%] h-[30px] colon absolute right-[5%] bottom-50' 
        />
      </div>
    </div>
    </>
  )
}
