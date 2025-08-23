import React from "react";

export default function tilted() {
  return (
    <>
      <div className="w-full relative z-50 mt-20 lg:mt-40 md:mt-60 h-[200px] ">
        <div className="marquee-container imp text-6xl sm:text-6xl lg:text-8xl text-black bg-transparent font-black white-outline">
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
        <div className="absolute top-5 lg:right-25 md:right-25 right-0 -rotate-5 hover:text-[#95C11E] flex items-center gap-2 lg:pt-15 md:pt-20 pt-10 text-white font-bold text-2xl">
          <img
            src="instagram.png"
            alt=""
            className="w-10 h-10 bg-white rounded-xl"
          />
          <p>FOLLOW US ON INSTAGRAM</p>
        </div>
      </div>
    </>
  );
}
