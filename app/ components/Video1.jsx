import React from "react";

export default function Video1() {
  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-[#16141B] via-[#4E3C84] to-[#020202]">
      <h1 className="text-white font-poppins text-[2.5rem] font-extrabold my-12">
        Are you ready to <span className="text-pink-500">Chill</span>
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
