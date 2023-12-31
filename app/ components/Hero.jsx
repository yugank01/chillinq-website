"use client";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Hero() {
  const slides = [
    {
      url: "/slide1.svg",
    },
    {
      url: "/slide2.svg",
    },
    {
      url: "/slide3.svg",
    },
    {
      url: "/slide4.svg",
    },
    {
      url: "/slide5.png",
    },
    {
      url: "/slide6.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Automatic slide switching
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds (adjust as needed)

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="w-full h-auto">
     <div className="h-[180px] sm:h-[350px] lg:h-[595px] xl:h-[780px] 2xl:h-[865px] relative group">
       <div
         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
         className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
       ></div>
       {/* Left Arrow */}
       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
         <BsChevronCompactLeft onClick={prevSlide} size={30} />
       </div>
       {/* Right Arrow */}
       <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
         <BsChevronCompactRight onClick={nextSlide} size={30} />
       </div>
       <div className="flex top-4 justify-center py-2">
         {slides.map((slide, slideIndex) => (
           <div
             key={slideIndex}
             onClick={() => goToSlide(slideIndex)}
             className={`text-2xl cursor-pointer ${
               slideIndex === currentIndex ? "text-blue-500" : "text-gray-500"
             }`}
           >
             <RxDotFilled />
           </div>
         ))}
       </div>
     </div>
    </div>
  );
}

export default Hero;
