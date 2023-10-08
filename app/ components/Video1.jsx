"use client"
import React, { useState, useEffect } from 'react';
// import Typewriter from "typewriter-effect";
// import Typical from 'react-typical';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Video1() {
  const [typeEffect] = useTypewriter({
    words: ['Chill?', 'Party?', 'Date?'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })
  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-[#16141B] via-[#4E3C84] to-[#020202]">
      <h1 className="flex text-white font-poppins text-[1.5rem] md:text-[2.5rem] font-extrabold my-12">
        Are you ready to <span className="ml-2 text-pink-500">
          {typeEffect}
        </span>
      </h1>
      {/* <div className="flex justify-center items-center">
        <img src="/videobg.svg" alt="" className="h-[80%] w-[80%]" />
      </div> */}
      <div className="vid-bg w-full">
        <div className="w-full h-full flex items-center justify-center rounded p-16 border border-transparent">
          <video autoPlay loop muted className="max-w-full rounded-lg">
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
