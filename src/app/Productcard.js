import React from 'react'
import { Inter } from 'next/font/google'
const Product = () => {
  return (
    <>
    <div className="div-card  w-fit my-4 mx-9 cursor-pointer shadow-xl hover:scale-105 transition-all duration-500">
        
        <img className='h-96' src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300963553SAGE_1.jpg?v=1705581331" alt="" srcset="" />
        <div className="lower-card-portion">
            <h1 className='text-gray-400'>ASCOT</h1>
            <h1 className='text-black'>Ascot Green Relaxed Fit Polo T-Shirt</h1>
            <h1>RS.1499.00</h1>
        </div>
    </div>
    </>
  )
}

export default Product