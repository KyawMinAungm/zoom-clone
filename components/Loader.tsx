import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex-center w-full h-screen'>
        <Image 
        width={50}
        height={50}
        alt='lagaing'
        src='icons/loading-circle.svg'
        />

    </div>
  )
}

export default Loader