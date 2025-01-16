import React from 'react'
 import Image from 'next/image'
import Navbar from './Navbar';
const Hero = () => {
  return (
    
  <div className='min-screen-left'>
    <Navbar />
    <h1 className="text-5xl text-center text-white font-serif py-12 ">I M Nargis Ikram</h1>
    <div className="py-8 gap-48 flex justify-center items-center">
        <Image 
        src="/project4.jpeg"
        alt="image 4" 
        width={400}
        height={400}
        />
        <p>This is my personal portfolio my skills my work </p>
        </div>        
          </div>
  )
}

export default Hero;