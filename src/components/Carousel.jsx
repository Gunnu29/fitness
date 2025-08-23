import React, { useState } from "react";

const slides = [
  { image: "cafe-about-1.jpg" },
  { image: "cafe-menu-e1702553754869.jpg" },
  { image: "cafe-about-1.jpg" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const { image } = slides[current];

  return (
    <div className="w-full h-auto mt-20">
      <div className="w-[90%] md:w-[85%] mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Image & Overlay */}
        <div className="relative w-full md:w-[50%]">
          <div className="w-full h-[250px] md:h-[400px] rounded-xl overflow-hidden relative">
            <img
              src={image}
              alt=""
              className="w-full h-full object-cover transition-all duration-700 rounded-xl"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10 rounded-xl"></div>
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full cursor-pointer border ${
                  current === index
                    ? "bg-[#95C11E] border-[#95C11E]"
                    : "bg-white border-white"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[40%] text-center md:text-left">
          <h3 className="text-white text-2xl md:text-4xl font-extrabold mb-6 md:mb-10">
            FOOD AND DRINK
          </h3>
          <p className="text-white text-base md:text-xl/8">
            Whether you’re getting ready to play, just finishing your practice
            session or feeling peckish on the range, we have a variety of food
            and drink options brought directly to your table or bay.
          </p>
          <p className="text-white text-base md:text-xl/8 mt-3 md:mt-5">
            We make sure that we cater for everyone, offering a range of vegan
            and gluten-free options.
          </p>
          <button className="relative overflow-hidden mt-6 md:mt-10 rounded-full px-6 md:px-8 py-2 border-2 border-[#95C11E] group">
            {/* Text */}
            <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-black">
              COFFEE SHOP
            </span>

            {/* Curved Green Fill */}
            <span className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-t from-[#95C11E] to-green-900 rounded-full scale-y-0 origin-bottom transition-transform duration-700 group-hover:scale-y-100"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
