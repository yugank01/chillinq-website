"use client";
import React, { useState } from "react";
import Image from "next/image";
const Navbar = () => {
  const [Toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!Toggle);
  };

  return (
    <header className="text-gray-200 body-font fixed flex items-center justify-between pl-[50px] z-10 w-full">
      <a className="flex title-font font-medium items-center text-white md:mb-0">
        <Image src="/logo.png" height="30" width="120" />

        <span class="ml-3 text-xl bg-[#020202]"></span>
      </a>
      
      <div className="container mx-auto hidden md:flex flex-wrap p-5 flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Whitepaper</a>
          <a className="mr-5 hover:text-gray-900">Litepaper</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
        </nav>
        <button className="inline-flex items-center bg-transparent border border-[#C63252] text-white py-1 px-6 rounded-xl">
          <img src="/playstore.svg" alt="" className="mr-2" />
          Google Play
        </button>
        <button className="inline-flex items-center ml-2 bg-transparent border border-[#C63252] text-white py-1 px-6 rounded-xl">
          <img src="/apple.svg" alt="" className="mr-2" />
          App Store
        </button>
      </div>

      <div className={`delay-300 md:hidden h-screen bg-black/90 w-full fixed top-[80px] text-left container mx-auto flex flex-wrap p-5 items-center flex-col ${Toggle? 'right-[100%]':'left-[100%]}'}`}>
        <nav className="md:ml-auto md:mr-auto flex flex-col mb-8 flex-wrap items-center text-base justify-center">
          <a className="mr-5 mb-4 hover:text-gray-900">Home</a>
          <a className="mr-5 mb-4 hover:text-gray-900">Whitepaper</a>
          <a className="mr-5 mb-4 hover:text-gray-900">Litepaper</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
        </nav>
        <button className="inline-flex items-center bg-transparent border mb-5 border-[#C63252] text-white py-1 px-6 rounded-xl">
          <img src="/playstore.svg" alt="" className="mr-2" />
          Google Play
        </button>
        <button className="inline-flex items-center ml-2 bg-transparent border border-[#C63252] text-white py-1 px-6 rounded-xl">
          <img src="/apple.svg" alt="" className="mr-2" />
          App Store
        </button>
      </div>

      {Toggle ? <img src="/hamburger (1).png" alt="" className="z-0 md:hidden h-[40px] pr-[20px]" onClick={handleClick} /> : <img src="/close.png" alt="" className="z-0 md:hidden h-[40px] pr-[20px]" onClick={handleClick}/>}
    </header>
  );
};

export default Navbar;
