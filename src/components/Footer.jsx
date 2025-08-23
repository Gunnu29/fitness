import React from "react";

export default function Footer() {
  return (
    <footer className="w-full min-h-[400px] bg-gradient-to-tr from-[#95C11E] to-[#3CAA3C] text-black pb-6 px-6 pt-10 relative overflow-hidden">

      {/* Top Section */}
      <div className="w-[85%] pt-10 h-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0">

        {/* Logo + Socials */}
        <div className="space-y-6 w-full md:w-[20%] flex flex-col items-center md:items-start">
          <div className="w-[40%] md:w-[60%]">
            <img
              src="https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/logo-white.svg"
              alt="logo"
              className="w-full cursor-pointer"
            />
          </div>

          <div className="flex gap-4 justify-center md:justify-start">
            <img src="facebook.png" alt="Facebook" className="w-6 h-6 cursor-pointer hover:invert" />
            <img src="instagram (1).png" alt="Instagram" className="w-6 h-6 cursor-pointer hover:invert" />
          </div>
        </div>

        {/* Links */}
        <div className="w-full md:w-[60%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 md:gap-10 text-center md:text-left">
            <div>
              <p className="font-black text-lg sm:text-xl md:text-2xl hover:text-white cursor-pointer leading-[30px] mb-2">
                TOPTRACER RANGE
              </p>
              <p className="font-black text-lg sm:text-xl md:text-2xl hover:text-white cursor-pointer leading-[30px] mb-2">
                CRAZY GOLF
              </p>
              <p className="font-black text-lg sm:text-xl md:text-2xl hover:text-white cursor-pointer leading-[30px] mb-2">
                CAFÉ
              </p>
            </div>
            <div>
              <p className="font-black text-lg sm:text-xl md:text-2xl hover:text-white cursor-pointer leading-[30px] mb-2">
                EVENTS
              </p>
              <p className="font-black text-lg sm:text-xl md:text-2xl hover:text-white cursor-pointer leading-[30px] mb-2">
                GOLF LESSONS
              </p>
              <p className="font-black text-lg sm:text-xl md:text-2xl hover:text-white cursor-pointer leading-[30px] mb-2">
                CONTACT US
              </p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="w-full md:w-[20%] text-center md:text-left">
          <p className="font-semibold leading-[18px] mb-1 text-base md:text-lg">A20, SIDCUP BYPASS</p>
          <p className="font-semibold leading-[18px] mb-1 text-base md:text-lg">CHISLEHURST</p>
          <p className="font-semibold leading-[18px] mb-1 text-base md:text-lg">KENT</p>
          <p className="font-semibold leading-[18px] mb-1 text-base md:text-lg">BR7 6RP</p>
          <p className="font-semibold leading-[18px] mt-2 text-base md:text-lg">
            TEL: <span className="font-extrabold hover:text-white cursor-pointer">0208 309 0181</span>
          </p>
          <p className="leading-[28px] font-black hover:text-white text-base md:text-lg mt-1 cursor-pointer">
            GET DIRECTIONS
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[85%] mx-auto text-xs flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-between gap-2 md:gap-4 text-center md:text-left font-medium mt-6">
        <div>Copyright © 2023 Adventure Leisure Ltd. All rights reserved.</div>
        <div className="hidden md:block">|</div>
        <div className="hover:text-white cursor-pointer">Send your CV</div>
        <div className="hidden md:block">|</div>
        <div className="hover:text-white cursor-pointer">Privacy Policy</div>
        <div className="hidden md:block">|</div>
        <div className="hover:text-white cursor-pointer">Terms And Conditions</div>
        <div className="hidden md:block">|</div>
        <div className="hover:text-white cursor-pointer">Gender Pay Gap</div>
        <div className="hover:text-white cursor-pointer">Web Design London</div>
      </div>
    </footer>
  );
}
