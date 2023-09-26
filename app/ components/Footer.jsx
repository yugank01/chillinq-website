import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
            <div className="w-full">
      <img src="/banner.svg" alt="Your Photo" className="w-full h-auto" />
    </div>
     <footer class="text-white body-font">
        <br />
        <br />
     <div class="border-t border-red-500 border-blue-500 border-green-500"/>

  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">

    <a className="flex title-font font-medium items-center text-white md:mb-0">
         <Image src="/logo.png" height="30" width="120"/>

         <span class="ml-3 text-xl bg-[#020202]"></span>


        </a>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        {/* <h2 class="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">About us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Contact Us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav> */}
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        {/* <h2 class="title-font font-medium text-gray-200 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">First Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Fourth Link</a>
          </li>
        </nav> */}
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-200 tracking-widest text-sm mb-3"></h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">About us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Contact Us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Blogs</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Media Kit</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-200 tracking-widest text-sm mb-3"></h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Whitepaper</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Litepaper</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Terms & Conditions</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="py-8 bg-gradient-to-br from-[#2C59CE] via-[#6938D1] via-[#D13FCB] to-[#C93659]">
    <div class="container mx-auto py-2 px-5 flex flex-wrap flex-col sm:flex-row">
      <h1 class="text-white text-2xl text-center sm:text-left font-semibold">Don’t Miss out
      </h1>
      

      
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
      
    </div>
    <p class="text-white text-md text-center sm:text-left ml-10 px-[60px]">NFTs that look like you
</p>
  </div>
 
</footer> 
<div className="flex justify-center items-center h-[80px]">


<p className="font-normal text-[14px] text-white opacity-50">
© 2023 Chillinq. All rights reserved. Developed by Tygar Decentralized.          </p>
</div>
    </div>
  )
}

export default Footer
