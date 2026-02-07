import React from 'react'
import { Canvas } from '@react-three/fiber' 
import { OrbitControls, Float, Points, PointMaterial } from '@react-three/drei'



const Hero = () => {
  return (
    <div className='w-full sm:min-h-[500px] mt-20 bg-sky-50 dark:bg-[#0f172a] flex items-center justify-center text-center'>
      <div>
        <h1 className='text-4xl sm:text-5xl font-bold mb-4 text-gray-800 dark:text-gray-200'>Hi, I'm <span className='text-blue-600 dark:text-blue-400'>Afan Qaiser Farooqi</span></h1>
        <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6'>A passionate web developer crafting beautiful and functional websites.</p>
        <a href="#projects" className='inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>View My Work</a>
      </div>
      
      
    </div>
  )
}

export default Hero