import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Card = ({width,h1,para}) => {
  return (
      <div className={` bg-zinc-800 p-5 rounded-lg ${width} min-h-[25rem] flex flex-col justify-between items-center`}>
          <div className='w-full'>
               <div className=' w-full   flex justify-between itemsss-center'>
              <h3>one heading</h3>
              <IoIosArrowRoundForward/>
          </div>
          <h1 className='text-2xl font-medium mt-10'>whatever heading</h1>
          </div>
          <div className='down w-full'>
             
              {h1 && ( <> <h1 className='text-5xl font-bold tracking-tighter'>Start a project</h1>
              <button className='rounded-full py-2 px-5 mt-5  border-[1px] border-zinc-50'>Contact Us</button> 
              </>)}
              {para && (<p className='text-sm  text-zinc-500'> Lorem ipsum dolor sit amet.</p>)}
          </div>
      </div>
  )
}

export default Card