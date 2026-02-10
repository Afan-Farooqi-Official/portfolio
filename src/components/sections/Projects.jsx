import React from 'react'
import Title from '../Title'
import { assets } from '../../assets/assets'
import { Github, Link} from 'lucide-react'

const Projects = () => {

  const projects = [
    {
      title: "AI SaaS Platform",
      description: "StudioAI is a comprehensive solution that streamlines content creation, design, and productivity by integrating multiple AI-powered tools into one platform, offering article and blog generation, intelligent image editing, background and object removal, and resume analysis, all supported by a collaborative community — delivering fast, versatile, and user-friendly experiences that empower creators and professionals to produce high-quality work with efficiency and impact.",
      image: assets.AIStudio,
      link: "https://studio-ai-lake.vercel.app/",
      code: "https://github.com/Afan-Farooqi-Official/StudioAI",
      stacks: ["PERN", "React.js", "Node.js", "Express.js", "PostgreSQL", "TailwindCSS", "Gemini_API", "ClipDrop_API", "Clerk", "Cloudinary"]
    },
    {
      title: "E-Commerce Platform",
      description: "Clothify is tailored for online clothing stores, designed to mirror real-world business flow by allowing visitors to browse products and view details, while secure shopping and order tracking are enabled after login. Admins can efficiently manage inventory and orders through a dedicated dashboard with role-based access, while responsive UI and scalable components ensure a seamless shopping and management experience.",
      image: assets.Clothify,
      link: "https://clothify-omega.vercel.app/",
      code: "https://github.com/Afan-Farooqi-Official/Clothify",
      stacks: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Stripe_API", "Cloudinary"]
    },
    {
      title: "ChatApp",
      description: "Real-Time Chat Platform - ChatOne is a social interaction application enabling seamless communication with features such as instant messaging, image sharing, live online/offline status, secure authentication, and customizable user profiles — all within a clean, responsive interface. Built on a scalable MERN stack architecture, ChatOne delivers smooth performance, modern UI/UX, and a reliable foundation for interactive social experiences.",
      image: assets.ChatOne,
      link: "https://chatone-app.vercel.app/login",
      code: "https://github.com/Afan-Farooqi-Official/ChatOne",
      stacks: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Socket.io", "JWT", "Cloudinary", "bcrypt"]
    },
    {
      title: "Blogging Platform",
      description: "A modern blog management platform enabling users to seamlessly create, read, edit, delete, and share content, featuring secure authentication, rich content editing, community engagement, and real-time updates for recent posts. With a responsive UI and reliable backend storage, it delivers a smooth, scalable, and user-friendly experience across all devices.",
      image: assets.BlogCircle,
      link: "https://blogcircle.appwrite.network/",
      code: "https://github.com/Afan-Farooqi-Official/BlogCircle",
      stacks: ["React.js", "TailwindCSS", "Appwrite", "Redux"]
    },
    {
      title: "Disney+ Clone",
      description: "A responsive and feature-rich Disney+ clone built with React and TailwindCSS, replicating the core UI and functionality of the popular streaming platform. It includes a modern design, responsive layout, and seamless navigation across devices.",
      image: assets.DisneyPlus,
      link: "https://disney-plus-clone-six-sigma.vercel.app/",
      code: "https://github.com/Afan-Farooqi-Official/DisneyPlus-Clone",
      stacks: ["React.js", "TailwindCSS", "Firebase", "Redux"]
    },
  ]

  return (
    <div className='w-full min-h-screen bg-sky-50 dark:bg-[#0f172a] flex flex-col px-6 py-10 md:px-20 md:py-20' id='projects'>
      <Title title="Featured Projects" />
      <h3 className='max-w-4xl text-center mx-auto leading-relaxed text-lg sm:text-md text-gray-600 dark:text-gray-400'>Explore my recent projects to discover what I've been working on.</h3>
      <div className='w-full h-full flex flex-col gap-10 mt-10'>
        {
          projects.map((project, index) => (
            <div key={index} className={`w-full h-full flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-[1.02] ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className='w-full md:w-1/2 h-auto rounded-lg overflow-hidden shadow-lg'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-300 hover:scale-105' />
              </div>
              <div className='w-full md:w-1/2 flex flex-col gap-4'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-400'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {project.stacks.map((stack, i) => (
                    <span key={i} className='px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm'>{stack}</span>
                  ))}
                </div>
                <div className='flex gap-4 mt-4'>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    <Link size={22} className='inline-block mr-2' />
                    Demo
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300">
                    <Github className='inline-block mr-2' size={22} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Projects