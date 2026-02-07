import React from 'react'
import {assets} from '../assets/assets'

const Logo = () => {
  return (
    <div className='w-16 h-16 flex items-center justify-center'>
        <img src={assets.logo} alt="Logo" />
    </div>
  )
}

export default Logo