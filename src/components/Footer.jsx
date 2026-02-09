import React from 'react'

const Footer = () => {
  return (
    <div className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 py-6 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Afan Qaiser Farooqi. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer