import { Github, Linkedin } from 'lucide-react'
import Animation from '../Animation'

const Hero = () => {
  return (
    <div className='w-full min-h-[400px] md:min-h-[500px] mt-20 bg-sky-50 dark:bg-[#0f172a] flex justify-between items-center px-6 md:px-20' id='home'>

      <div className='w-full md:w-2/3 lg:w-3/4 text-center md:text-left py-10 md:py-0 lg:py-0'>
        <h1 className='text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-sky-300 text-transparent bg-clip-text'>Afan Qaiser Farooqi</h1>
        <h2 className='text-xl sm:text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-sky-300 text-transparent bg-clip-text'>MERN Stack Developer</h2>
        <p className='text-lg sm:text-md text-gray-600 dark:text-gray-400 mb-6'>Crafting elegant solutions with modern web technologies.</p>
        <div className='flex items-center md:justify-start justify-center'>
          <a href="#contact" className='inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Get In Touch</a>
          
          {/* Github and linkedIn */}
          <a href="https://github.com/Afan-Farooqi-Official" target="_blank" rel="noopener noreferrer" className='border border-gray-800 dark:border-gray-700 rounded-full p-2 ml-4 hover:bg-black hover:text-white transition'>
            <Github className="w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-white transition" />
          </a>

          <a href="https://www.linkedin.com/in/afan-qaiser-farooqi-9334432b3/" target="_blank" rel="noopener noreferrer" className='border border-gray-800 dark:border-gray-700 rounded-full p-2 ml-4 hover:bg-blue-600 hover:text-white transition'>
            <Linkedin className="w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-white transition" />
          </a>
        </div>
      </div>

      <div className='hidden md:flex md:w-1/3 lg:w-1/4 justify-center' style={{ perspective: 1000 }}>
        <Animation />
      </div>
      
    </div>
  )
}

export default Hero