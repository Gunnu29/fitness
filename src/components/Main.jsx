import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./About"; // adjust path if needed

export default function HeroSection() {
  const sectionRef = useRef(null);

  // Scroll progress only for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // From top to bottom of section
  });

  // Fade from 0.4 to 1 as we scroll within the section
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full z-0"
      style={{ height: "180vh" }} // Enough for Main + About
    >
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        src="/hero.mp4"
      />

      {/* Black Overlay with gradual opacity */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Main content */}
      <div
        className="
          absolute lg:top-[20%] sm:top-[13%] top-[13%]  left-[5%] z-20 flex flex-col 
          items-center text-white font-black 
          lg:text-8xl md:text-6xl sm:text-4xl text-3xl 
          cursor-default w-[90%]
        "
      >
        <h1 className="stroke relative tracking-wide text-white text-center">
          EAT. DRINK. PLAY
        </h1>
        <p className="mt-5 sm:mt-7 text-lg sm:text-2xl font-bold text-center">
          WELCOME TO SIDCUP FAMILY GOLF!
        </p>
        <p className="mt-3 text-sm sm:text-lg font-normal text-center w-[90%] sm:w-[70%] md:w-[50%] leading-5 sm:leading-6">
          Sidcup Family Golf is a Toptracer driving range and crazy golf venue in Sidcup,
          South East London. Passionate about technology, player development and making
          golf fun and accessible to everyone.
        </p>
      </div>

      {/* About Section directly inside here */}
      <div className="relative z-30 lg:pt-[90vh] md:pt-[70vh] sm:pt-[50vh] pt-[50vh]">
        <About />
      </div>
    </section>
  );
}
