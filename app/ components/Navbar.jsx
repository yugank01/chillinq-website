import React from "react";
import Image from "next/image";
const Navbar = () => {
  return (
    <header className="text-gray-200 body-font fixed z-10 w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white md:mb-0">
         <Image src="/logo.png" height="30" width="120"/>

         <span class="ml-3 text-xl bg-[#020202]"></span>


        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <a className="mr-5 hover:text-gray-900">Whitepaper</a>
          <a className="mr-5 hover:text-gray-900">Litepaper</a>
          <a className="mr-5 hover:text-gray-900">Blog</a>
        </nav>
        <button className="inline-flex items-center bg-transparent border border-[#C63252] text-white py-1 px-6 rounded-xl">
         <img src="/playstore.svg" alt="" className="mr-2"/>
          Google Play
         

        </button>
        <button className="inline-flex items-center ml-2 bg-transparent border border-[#C63252] text-white py-1 px-6 rounded-xl">
         <img src="/apple.svg" alt="" className="mr-2"/>
          App Store
         

        </button>
      </div>
    </header>
  );
};

export default Navbar;
