"use client"
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
const FAQ = ({ question, answer })  => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <div className='container mx-auto p-4'>  */}
          
          <div className="my-4">
      <button
  className="w-[90%] md:w-[60%] flex items-center justify-between mx-auto p-2 md:p-4 bg-[#020202] text-left focus:outline-none border border-white rounded-xl"
  onClick={toggleFAQ}
      >
        <span className="font-medium sm:font-semibold text-white text-xs md:text-lg">{question}</span>
        <span className={`transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}><Image src="/drop.svg" height="15" width="20"/></span>
      </button>
      {isOpen && (
        <div className="w-[90%] md:w-[60%] mx-auto p-4 bg-[#020202] text-left focus:outline-none border border-white rounded-xl">
          <p className="text-white text-xs md:text-lg">{answer}</p>
        </div>
      )}
    </div>
    

        {/* </div> */}
    </div>
  )
}

export default FAQ
