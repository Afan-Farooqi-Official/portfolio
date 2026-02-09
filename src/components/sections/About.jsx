import React from 'react'
import Title from '../Title'

const About = () => {
  return (
    <div className='w-full min-h-screen flex flex-col px-6 md:px-20' id='about'>
      <div className='flex flex-col justify-center items-center'>
        <Title title="About Me" />
        <p className='max-w-4xl text-center mx-auto leading-relaxed text-lg sm:text-md text-gray-600 dark:text-gray-400 '>
          MERN Stack Developer focused on building scalable, high-performance web applications using MongoDB, Express.js, React, and Node.js. Passionate about clean architecture, efficient code, and delivering intuitive, user-centric digital experiences.
        </p>
      </div>
      <div className='mb-10'>
        <h3 className='text-2xl font-semibold text-center mt-10 text-gray-800 dark:text-gray-200'>Skills & Expertise</h3>
        <div className='mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
          {/* frontend */}
            <div className='bg-sky-50 dark:bg-gray-800 p-6 rounded-lg shadow-md 
            transition-transform duration-300 ease-in-out 
            hover:bg-sky-200 dark:hover:bg-gray-700
            hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]'
            >
              <h4 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>Frontend</h4>
              <ul className='mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400'>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          {/* backend */}
            <div className='bg-sky-50 dark:bg-gray-800 p-6 rounded-lg shadow-md 
            transition-transform duration-300 ease-in-out 
            hover:bg-sky-200 dark:hover:bg-gray-700
            hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]'
            >
              <h4 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>Backend</h4>
              <ul className='mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400'>
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>Appwrite</li>
                <li>Cloudinary</li>
              </ul>
            </div>
          {/* cloud & devOps */}
            <div className='bg-sky-50 dark:bg-gray-800 p-6 rounded-lg shadow-md 
            transition-transform duration-300 ease-in-out 
            hover:bg-sky-200 dark:hover:bg-gray-700
            hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]'
            >
              <h4 className='text-xl font-semibold text-gray-800 dark:text-gray-200'>Cloud & DevOps</h4>
              <ul className='mt-2 list-disc pl-5 text-gray-600 dark:text-gray-400'>
                <li>Git</li>
                <li>Github</li>
                <li>Vercel</li>
                <li>Appwrite</li>
                <li>Firebase</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About