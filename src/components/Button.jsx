import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'

const Button = ({name ="Get Started"}) => {
  return (
      <div className='min-w-40 bg-gray-100 py-2 px-4 rounded-full text-black flex justify-between items-center'>
      <span className='text-lg font-normal'>{name }</span>
          <span><IoIosReturnRight /></span>
    </div>
  )
}

export default Button