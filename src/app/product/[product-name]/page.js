import PinCode from '@/app/PinCode'
import Product from '@/app/Productcard'
import React from 'react'

const page = ({params}) => {
  return (
    <>
    <div className="whole-part flex flex-row my-9 mx-4 gap-9 justify-around">
      <div className="left-portion  w-fit flex gap-9 ">
      <img className='h-[65vh] shadow-lg rounded-xl rotate-3  backdrop-blur-4xl' src="https://www.westside.com/cdn/shop/files/300962236BLACK_1.jpg?v=1705581332&width=493" alt="" />
      <img className='h-[65vh] shadow-lg rounded-xl -rotate-3 grayscale' src="https://www.westside.com/cdn/shop/files/300962236BLACK_1.jpg?v=1705581332&width=493" alt="" />
      </div>
      <div className="right-portion   my-37 w-45 text-justify ">
        <div className="right-portion-upper text-xl leading-10">
          <h1 className='font-thin text-gray-300'>NUON</h1>
          <h1>Nuon Black Embroidered Slim Fit T-Shirt</h1>
          
          <h1>RS.699 (Inclusive of All Taxes)</h1>
          <hr />
          <div className='border-t-2 border-gray-400 w-full h-0'></div>
          <h1>SIZE</h1>
          <div className="my-buttons text-lg flex flex-row gap-2 mx-3 my-3">
            <button className='border-2 border-black w-10 h-10  hover:bg-black hover:text-white'>XS</button>
            <button className='border-2 border-black  w-10 h-10 hover:bg-black hover:text-white'>S</button>
            <button className='border-2 border-black  w-10 h-10 hover:bg-black hover:text-white'>M</button>
            <button className='border-2 border-black  w-10 h-10 hover:bg-black hover:text-white'>L</button>
            <button className='border-2 border-black  w-10 h-10 hover:bg-black hover:text-white'>XL</button>
          </div>
          <button className='bg-black h-20 w-full text-white'>ADD TO BAG</button>
          <div className="mydetails">
            <PinCode></PinCode>

          <details >
            <summary>Product Details and Overview</summary>
            <p >Kick your style quotient up a notch with the Nuon t-shirt. Black canvas boasting a round neckline, short sleeves, and a contrast print infused with elegant embroidery details, this t-shirt effortlessly blends comfort and trendiness. Pair it with high-waisted jeans and sneakers for an effortlessly chic look.</p>
          </details>
          <details>
            <summary>Delivery, Return & Exchange Policy</summary>
            <p>Kick your style quotient up a notch with the Nuon t-shirt. Black canvas boasting a round neckline, short sleeves, and a contrast print infused with elegant embroidery details, this t-shirt effortlessly blends comfort and trendiness. Pair it with high-waisted jeans and sneakers for an effortlessly chic look.</p>
          </details>
          </div>
        </div>
      </div>
      
    </div>
    <div className="lower-similar-portion mx-11 my-4">
    <h1 className='text-2xl'>Similar Products</h1>
    <div className="similar-products flex">
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </div>
  </div>
    </>
  )
}

export default page