import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50); 
  });

  // Animate side menu (only small screens)
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100vw",   // push it fully out of viewport
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [menuOpen]);

  return (
    <>
      <motion.div
        className={`w-full flex items-center justify-between px-6 md:px-24 fixed top-0 left-0 z-[99] text-white transition-colors duration-300 ${
          scrolled ? 'bg-black/50 h-[100px]' : 'bg-transparent h-[110px]'
        }`}
      >
        {/* Logo */}
        <div className='cursor-pointer'>
          <img
            src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
            className="h-[60px] md:h-[75px]"
            alt="logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <div className='cursor-pointer hover:text-[#95C11E]'><h2>TOPTRACER RANGE</h2></div>
          <div className='cursor-pointer hover:text-[#95C11E]'><h2>GOLF LESSONS</h2></div>
          <div className='cursor-pointer hover:text-[#95C11E]'><h2>ADVENTURE GOLF</h2></div>
          <div className='cursor-pointer hover:text-[#95C11E]'><h2>CAFE</h2></div>
          <div className='cursor-pointer hover:text-[#95C11E]'><h2>EVENTS</h2></div>
        </div>

        {/* Hamburger (only on small screens) */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </div>
      </motion.div>

      {/* Sliding Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 right-0 w-3/4 h-full bg-black text-white flex flex-col items-start p-6 z-[98] md:hidden"
        style={{ transform: "translateX(100vw)" }} // Start fully hidden off screen
      >
        <div className="mt-20 flex flex-col gap-6 text-lg w-full">
          <div className='cursor-pointer hover:text-[#95C11E]'>TOPTRACER RANGE</div>
          <div className='cursor-pointer hover:text-[#95C11E]'>GOLF LESSONS</div>
          <div className='cursor-pointer hover:text-[#95C11E]'>ADVENTURE GOLF</div>
          <div className='cursor-pointer hover:text-[#95C11E]'>CAFE</div>
          <div className='cursor-pointer hover:text-[#95C11E]'>EVENTS</div>
        </div>
      </div>
    </>
  );
}
