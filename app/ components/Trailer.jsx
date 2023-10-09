import React from 'react'

const Trailer = () => {
  return (
    <div className='bg-[#141414]'>
      <div className="w-full h-full flex items-center justify-center rounded p-16 border border-transparent">
  <video autoPlay loop muted className="max-w-full rounded-lg">
    <source src="/video2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    </div>
  )
}

export default Trailer
