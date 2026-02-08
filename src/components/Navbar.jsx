import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import Logo from './Logo'
import { Sun, Moon, X, Menu } from 'lucide-react'

const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const [visible, setVisible] = useState(false);

  return (
    <div className='flex items-center justify-between w-full py-2 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_6px_-4px_rgba(255,255,255,0.15)] px-4 md:px-8 lg:px-16 bg-transparent backdrop-blur-sm fixed top-0 left-0 right-0 z-50'>
        <Logo />

        <div className='flex items-center gap-6'>
            <ul className='hidden sm:flex items-center gap-6 font-medium'>
                {['home', 'about', 'projects', 'contact'].map((item) => (
                    <li key={item} className='group flex flex-col items-center gap-1'>
                    <a href={`#${item}`} className='transition-colors duration-300 group-hover:text-sky-500'>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                    <span className='block h-[1.5px] bg-sky-500 w-0 transition-all duration-300 group-hover:w-full'></span>
                </li>
                ))}
            </ul>

            {/* Theme Toggle Button */}
            <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:text-sky-500 cursor-pointer transition-colors duration-300">
                {theme === 'light' ? <Moon /> : <Sun />}
            </button>

            <div onClick={() => setVisible(!visible)} className='cursor-pointer sm:hidden'>
                {
                    visible ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />
                }
            </div>

            {/* Mobile Menu */}
            {
                visible && (
                    <div className={`fixed bg-white/80 dark:bg-gray-900/80 backdrop-blur-3xl shadow-lg top-16 left-0 right-0 z-50 flex flex-col items-center gap-6 py-6 shadow-[0_4px_6px_rgba(0,0,0,0.1)] sm:hidden
                        transition-all duration-500 ease-in-out 
                        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                        {['home', 'about', 'projects', 'contact'].map((item) => (
                            <a key={item} href={`#${item}`} onClick={() => setVisible(false)} className='font-medium hover:text-sky-500 transition-colors duration-300'>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        ))}
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Navbar