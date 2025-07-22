import React from 'react'

const Footer = () => {
  return (
      <footer className='w-full'>
          <div className="max-w-screen-xl mx-auto " >
              <div className="py-10 flex gap-32">
              <div className="basis-1/2">
                  <h1 className="text-[10rem] font-semibold leading-none tracking-tight">refokus.</h1>
              </div>
              <div className="basis-1/2 flex gap-20">
                  <div className='basis-1/4'>
                      <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
                      {["instagram", "twitter (X)", "linkedin"].map((item) => (
                          <a className='block mt-2 capitalize text-zinc-400' key={item} href="#">{ item}</a>

                      ))}
                  </div>
                   <div className='basis-1/4'>
                      <h4 className='mb-10 text-zinc-500 capitalize'>sitemap</h4>
                      {["home", "work", "carres","Contact"].map((item) => (
                          <a className='block mt-2 capitalize text-zinc-400' key={item}  href="#">{ item}</a>

                      ))}
                  </div>
                  <div className="basis-1/2 flex flex-col items-end">
                      <p className='text-sm text-right'> Refokus is pioneering digital agency driven by design and empowered by technology.</p>
                      <img src="/Badge-EnterprisePartner-Blue 1.svg" alt="Badge-Enterprise" className='mt-10 w-32' />
                  </div>
                  </div>
                  </div>
                 <div className="flex items-center gap-10 mt-10">
             {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map((text)=><a key={text} href='#' className='text-zinc-500 text-sm tracking-tight font-medium'>{text}</a>)}
           </div>
          </div>
         
        
      </footer>
  )
    
}

export default Footer

