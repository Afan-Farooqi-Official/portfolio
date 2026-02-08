import { Github, Linkedin } from 'lucide-react'
import Animation from '../Animation'

const Hero = () => {
  return (
    <div className='w-full sm:min-h-[500px] mt-20 bg-sky-50 dark:bg-[#0f172a] flex justify-between items-center px-6 md:px-20'>

      <div className='max-w-2xl w-full'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-sky-300 text-transparent bg-clip-text'>Afan Qaiser Farooqi</h1>
        <h2 className='text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-sky-300 text-transparent bg-clip-text'>MERN Stack Developer</h2>
        <p className='text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6'>Crafting elegant solutions with modern web technologies.</p>
        <div className='flex items-center'>
          <a href="#contact" className='inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition'>Get In Touch</a>
          
          {/* Github and linkedIn */}
          <a href="https://github.com/afanqaiserfarooqi" target="_blank" rel="noopener noreferrer" className='border border-gray-800 dark:border-gray-700 rounded-full p-2 ml-4 hover:bg-black hover:text-white transition'>
            <Github className="w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-white transition" />
          </a>

          <a href="https://www.linkedin.com/in/afan-qaiser-farooqi/" target="_blank" rel="noopener noreferrer" className='border border-gray-800 dark:border-gray-700 rounded-full p-2 ml-4 hover:bg-blue-600 hover:text-white transition'>
            <Linkedin className="w-6 h-6 text-gray-800 dark:text-gray-200 hover:text-white transition" />
          </a>
        </div>
      </div>

      <div className='hidden md:flex justify-center items-center w-[420px] md:w-[520px] h-[480px] relative' style={{ perspective: 1000 }}>
        <Animation />
      </div>
      
    </div>
  )
}

export default Hero