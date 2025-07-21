import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'

const Button = () => {
  return (
      <div className='min-w-40 bg-gray-100 py-2 px-4 rounded-full text-black flex justify-between items-center'>
          <span className='text-sm font-normal'>Get Started</span>
          <span><IoIosReturnRight /></span>
    </div>
  )
}

export default Button