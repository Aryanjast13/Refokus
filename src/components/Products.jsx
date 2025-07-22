import React from 'react'
import Product from './Product'

const Products = () => {
    let products = [
        { title: "Rainfall 2025", description: "We redesigned GoodRoots' website to enhance user experience, streamline navigation, and better communicate their shared equity model for renters seeking homeownership.", live: true, case: false },
        { title: "Analog Way", description: " Analog Way's website transformed with a dynamic, story-driven homepage and streamlined design, redefining their digital presence to attract leads and engage users.", live: true, case: false },
        { title: "Josys", description: "A sleek, scalable Webflow website that reflects Josys' evolution from a fast-growing Japanese startup to a global SaaS management leader, combining dynamic design with seamless functionality for an enhanced user experience.", live: true, case: false },
        { title: "Showcase", description: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.", live: true, case: false }

        
    ]

  return (
      <div>
          {products.map((val, index) => (
              <Product val={val} />
          ))}
    </div>
  )
}

export default Products

