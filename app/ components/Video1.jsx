import React from "react";

export default function Video1() {
  return (
    <div className="flex justify-center items-center flex-col mx-4">
      <h1 className="text-white font-poppins text-[2.5rem] font-extrabold my-12">
        Are you ready to <span className="text-pink-500">Chill</span>
      </h1>
      <div className="flex justify-center items-center">
        <img src="/videobg.svg" alt="" className="h-[80%] w-[80%]" />
      </div>
      <div className="flex justify-center items-center">
        <video controls width="640" height="360">
          <source src="/video1.mp4" type="video/mp4" className="relative z-5" />
        </video>
      </div>
    </div>
  );
}
