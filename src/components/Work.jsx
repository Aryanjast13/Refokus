import React from 'react'

const Work = () => {
    let images = [
        { url: "/first.png", top:"50%", left:"50%", isActive:false},
        { url: "/second.png",top:"56%",left:"44%",isActive:false},
        { url: "/third.webp",top:"43%",left:"54%",isActive:false},
        { url: "/fourth.png",top:"59%",left:"47%",isActive:false},
        { url: "/five.webp",top:"52%",left:"46%",isActive:false}
    ]
  return (
      <div className='w-full py-4'>
          <div className='relative max-w-screen-xl min-h-[50vh]  text-center mx-auto '>
              <h1 className='text-[34rem] leading-none tracking-tight font-normal'>work</h1>
              <div className='w-full absolute top-0 h-full'>
                  {images.map((elm) => (elm.isActive && (<img src={elm.url} className="w-72 absolute  rounded-lg -translate-1/2" style={{ top: elm.top,left:elm.left}} alt="" />)))}
              </div>
          </div>
    </div>
  )
}

export default Work;