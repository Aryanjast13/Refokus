import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
      <div className='w-full'>
          <div className='max-w-screen-xl py-3 mx-auto flex gap-2'>
              <Card width={"basis-1/2"} h1={false} para={true} />
              <Card width={"basis-2/3"} h1={true} para={false } />
          </div>
    </div>
  )
}

export default Cards