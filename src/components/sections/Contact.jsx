import React from 'react'
import Title from '../Title'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className='w-full min-h-screen bg-sky-50 dark:bg-[#0f172a] flex flex-col px-6 py-10 md:px-20 md:py-20' id='contact'>
      <Title title="Get In Touch" />

      <p className='max-w-4xl text-center mx-auto leading-relaxed text-lg sm:text-md text-gray-600 dark:text-gray-400 '>
        I'm currently open to new opportunities and collaborations. Whether you have a project in mind, want to discuss potential roles, or just want to connect, feel free to reach out. I look forward to hearing from you!
      </p>

      <div className='w-full h-full flex flex-col md:flex-row items-center gap-10 mt-10 justify-center'>
        <a href="mailto:afanqaiserfarooqi@gmail.com" 
        className="flex items-center gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg 
        transition-transform duration-300 ease-in-out
        hover:bg-sky-100 dark:hover:bg-gray-900
        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
        >
          <Mail className="text-gray-800 dark:text-white" size={30} />
          <span className="font-medium text-gray-800 dark:text-white">afanqaiserfarooqi@gmail.com</span>
        </a>
        <a href="tel:+923132354990" 
        className="flex items-center gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg 
        transition-transform duration-300 ease-in-out
        hover:bg-sky-100 dark:hover:bg-gray-900
        hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]"
        >
          <Phone size={30} className="text-gray-800 dark:text-white" />
          <span className="font-medium text-gray-800 dark:text-white">+92 313 2354990</span>
        </a>
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <MapPin size={30} className="text-gray-800 dark:text-white" />
          <span className="font-medium text-gray-800 dark:text-white">Gulshan-e-Iqbal, Karachi, Pakistan</span>
        </div>
      </div>

      {/* Contact form */}
      <form className='w-full max-w-2xl mx-auto mt-20 flex flex-col gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
        <div className='flex flex-col md:flex-row gap-6 my-5 md:my-0'>
          <input type="text" placeholder='Your Name' required className='w-full text-gray-600 dark:text-gray-300 p-3 rounded border border-gray-300 dark:border-gray-500 focus:outline-none focus:outline-none focus:ring-2 focus:ring-blue-300 transition' />
          <input type="email" placeholder='Your Email' required className='w-full text-gray-600 dark:text-gray-300 p-3 rounded border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition' />
        </div>
        <input type="text" placeholder='Subject' required className='w-full my-5 text-gray-600 dark:text-gray-300 p-3 rounded border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition' />
        <textarea placeholder='Your Message' rows="6" required className='w-full mb-5 text-gray-600 dark:text-gray-300 p-3 rounded border border-gray-300 dark:border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition'></textarea>
        <button type='submit' className='w-full px-6 py-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact