import React from "react";

export default function Video2() {
  return (
    <div className="flex justify-center items-center mx-4 my-12">
      <video controls width="640" height="360">
        <source src="/video2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
