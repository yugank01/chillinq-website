"use client"
import React,{useState, useEffect} from 'react'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Showcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 4; // Adjust this number based on your content


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds (adjust the interval as needed)
    
        return () => {
          clearInterval(interval); // Clean up the interval on unmount
        };
      }, []);
    
  return (
    <div className='flex flex-col items-center'>
      <div className='container flex flex-col items-center pb-8 p-0 md:p-4'> 
          <Image className="mx-auto mb-4" src="/chillinq2.png" height="200" width="250"></Image>
          <p className="text-center w-60 sm:w-80 md:w-96 lg:w-2/5 text-gray-100 text-xl sm:text-2xl">
          App for iOS and Android Users
          <br />
          Solving problems plaquing the Online Social Space          </p>
          </div>

          <Carousel
      autoPlay={false} // Disable auto-play since we control it manually
      showArrows={false}
      showThumbs={false}
      selectedItem={currentIndex}
    >
      <div className='w-[50%] h-[50%] mx-auto my-auto'>
        <Image src="/mockup1.svg" height="200" width="200" alt="Slide 1" />
      </div>
      <div className='w-[50%] h-[50%] mx-auto my-auto'>
        <Image src="/mockup2.svg" height="200" width="200" alt="Slide 2" />
      </div>
      <div className='w-[50%] h-[50%] mx-auto my-auto'>
        <Image src="/mockup3.svg" height="200" width="200" alt="Slide 3" />
      </div>
      <div className='w-[50%] h-[50%] mx-auto my-auto'>
        <Image src="/mockup4.svg" height="200" width="200" alt="Slide 3" />
      </div>
    </Carousel>

    <div className="flex items-center justify-center space-x-16">
  <button className="flex items-center shrink-0 bg-[#272628] border border-[#AFA9A9] text-[0.5rem] md:text-[1.25rem] text-white py-2 px-2 md:px-6 rounded-xl">
    Download Now
    <img src="/play.png" alt="" className="ml-2 h-[20px] md:h-[36px]" />

  </button>
  <button className="inline-flex items-center shrink-0 bg-[#272628] border border-[#AFA9A9] text-[0.5rem] md:text-[1.25rem] text-white py-1 px-2 md:px-6 rounded-xl">
    Download Now
    <img src="/app.png" alt="" className="ml-2 h-[25px] md:h-[46px]" />

  </button>
</div>


    </div>
  )
}

export default Showcase
