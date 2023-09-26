import React from 'react'

const Trailer = () => {
  return (
    <div>
      <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded">
  <video autoPlay loop muted className="max-w-full">
    <source src="/your-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    </div>
  )
}

export default Trailer
