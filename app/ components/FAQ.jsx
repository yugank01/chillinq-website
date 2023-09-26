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
          
          <div className="mb-4 mt-4">
      <button
  className="faq flex items-center justify-between mx-auto w-24 px-4 py-4 bg-[#020202] text-left focus:outline-none border border-white rounded-xl"
  onClick={toggleFAQ}
      >
        <span className="font-semibold text-white text-lg">{question}</span>
        <span className={`transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}><Image src="/drop.svg" height="15" width="20"/></span>
      </button>
      {isOpen && (
        <div className="faq items-center justify-between mx-auto w-24 px-4 py-4 bg-[#020202] text-left focus:outline-none border border-white rounded-xl">
          <p className="text-white ">{answer}</p>
        </div>
      )}
    </div>
    

        {/* </div> */}
    </div>
  )
}

export default FAQ
