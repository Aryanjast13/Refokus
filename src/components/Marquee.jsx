import React from 'react'

const  Marquee = ({image_urls}) => {
    
     
  return (
      <div className='flex flex-col py-10  items-center '>
          <div className=' flex gap-20 overflow-hidden '>
             
              {image_urls.map((url)=>(<img src={url} className='w-34 h-32' alt="" />))}
              
          </div> 
          <div className='flex gap-20 overflow-hidden '>
              {image_urls.map((url)=>(<img src={url} className='w-34 h-32' alt="" />))}
          </div> 
    </div> 
  )
}

export default Marquee;