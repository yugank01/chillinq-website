"use client"
import React, { useRef, useEffect } from 'react';

function Slider() {
    const images = [
        {
          id: 1,
          img: '/insta11.png',
        },
        {
          id: 2,
          img: '/insta12.png',
        },
        {
          id: 3,
          img: '/insta13.png'
        }, 
        {
          id: 4,
          img: '/insta14.png',
        },
        {
          id: 5,
          img: '/insta15.png',
        },
        {
            id: 6,
            img: '/insta16.png',
          },
          {
            id: 7,
            img: '/insta17.png',
          },
          {
            id: 8,
            img: '/insta18.png',
          },
          {
            id: 9,
            img: '/insta19.png',
          },     
      ];

  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 10; // Adjust the scroll speed as needed
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 5; // Adjust the scroll speed as needed
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    }

    const scrollInterval = setInterval(() => {
      slideLeft(); // Auto-scroll to the left
    }, 500); // Adjust the interval time (milliseconds) as needed

    return () => {
      clearInterval(scrollInterval); // Clean up the interval on unmount
    };
  }, []);

  return (
    <div>
      <div className='relative flex items-center'>
        <div
          ref={sliderRef}
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
          style={{ scrollBehavior: 'smooth' }}
        >
          {images.map((item) => (
            <img
              key={item.id}
              className='w-[400px] inline-block p-4 rounded-lg cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={item.img}
              alt='/'
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
