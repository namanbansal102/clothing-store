import React from 'react'
import Product from '../Productcard'

const page = () => {
  return (
    <div className=' grid grid-cols-4 gap-4 '>
    <Product/>
    <Product/><Product/><Product/><Product/>
    <Product/><Product/><Product/><Product/><Product/>
        </div>
  )
}

export default page