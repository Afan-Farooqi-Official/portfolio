import React from 'react'
import Title from '../Title'

const Services = () => {

    const services = [
        {
            id: 1,
            title: 'Website Development',
            description: 'Building modern, responsive websites using HTML5, CSS3, JavaScript, and Bootstrap. Designed to work smoothly on all screen sizes with fast loading times and reliable performance.'
        },
        {
            id: 2,
            title: 'Frontend Development',
            description: 'Creating clean, intuitive user interfaces using HTML5, CSS3, JavaScript, and React.js. Focused on fast, responsive designs and smooth user experiences for modern web applications.'
        },
        {
            id: 3,
            title: 'Custom Web Applications',
            description: 'Building tailored web applications using React.js with backend technologies such as Node.js and Express.js. Integrates backend services like Firebase or Appwrite for real-time data, secure authentication, and reliable hosting.'
        },
        {
            id: 4,
            title: 'Web Hosting and Deployment',
            description: 'Deploying websites and web applications on platforms such as Firebase Hosting, Netlify, or traditional servers. Ensures secure HTTPS connections, optimized performance, and reliable production setups.'
        },
        {
            id: 5,
            title: 'Maintenance and Updates',
            description: 'Providing ongoing website maintenance, including security updates, performance optimizations, and feature enhancements. Ensures regular backups and reliable uptime monitoring for smooth operation.'
        },
        {
            id: 6,
            title: 'Responsive Design Audits',
            description: 'Assessing websites for responsiveness and cross-browser compatibility. Implements improvements using CSS3 media queries and modern design practices to ensure a seamless experience on all devices.'
        },
        {
            id: 7,
            title: 'API Integrations',
            description: 'Integrating third-party APIs, such as social media platforms and payment gateways, into web applications using JavaScript and React.js. Focused on secure, efficient, and reliable data handling.'
        },
        {
            id: 8,
            title: 'MERN Stack Development',
            description: 'Developing full-stack applications with MongoDB, Express.js, React.js, and Node.js. Creates scalable, secure solutions with reliable authentication and efficient database management.'
        },
        {
            id: 9,
            title: 'Mobile App Development',
            description: 'Building cross-platform mobile applications using React Native. Ensures responsive interfaces, real-time data handling, and seamless API integrations for smooth user experiences.'
        },
        {
            id: 10,
            title: 'E-commerce Solutions',
            description: 'Developing custom e-commerce platforms using the MERN stack. Features include secure payment processing, shopping carts, and efficient order management systems for seamless online shopping experiences.'
        }
    ]
    
  return (
    <div className="w-full min-h-screen flex flex-col px-6 py-10 md:px-20 md:py-20" id='services'>
        <div className="container mx-auto px-4">
            <Title title="Services" />
            <h3 className="max-w-4xl text-center mx-auto leading-relaxed text-lg sm:text-md text-gray-600 dark:text-gray-400">Helping businesses grow with smart digital solutions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {services.map(service => (
                    <div key={service.id} className="bg-sky-50 dark:bg-gray-800 p-6 rounded-lg shadow-md 
                    transition-transform duration-300 ease-in-out 
                    hover:bg-sky-100 dark:hover:bg-gray-900
                    hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{service.title}</h3>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services