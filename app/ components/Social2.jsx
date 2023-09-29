"use client"
import React, { useRef, useEffect } from 'react';

function Social2() {

    const data = [
        {
          id: 1,
          img: '/insta20.png',
        },
        {
          id: 2,
          img: '/insta21.png',
        },
        {
          id: 3,
          img: '/insta22.png'
        }, 
        {
          id: 4,
          img: '/insta23.png',
        },
        {
          id: 5,
          img: '/insta24.png',
        },
      ];

      
      
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 20; // Adjust the scroll speed as needed
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 20; // Adjust the scroll speed as needed
    }
  };

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      slideRight(); // Auto-scroll to the right
    }, 500); // Adjust the interval time (milliseconds) as needed

    return () => {
      clearInterval(scrollInterval); // Clean up the interval on unmount
    };
  }, []);

  return (
    <>
    <div>
    <div className='relative flex items-center p-48'>
        <div
          ref={sliderRef}
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          style={{ scrollBehavior: 'smooth' }}
        >
          {data.map((item) => (
            <img
              key={item.id}
              className='w-[400px] inline-block p-4 rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-300 '
              src={item.img}
              alt='/'
            />
          ))}
        </div>
      </div>


        
    </div>

    </>
  );
}

export default Social2;
