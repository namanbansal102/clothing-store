import { faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MyCart = () => {
  return (
    <div className="mycart shadow-lg my-4 w-fit flex gap-7 items-center px-4">
            <div className="mycart-left flex gap-7 text-xl">

            <img className='h-64' src="https://www.westside.com/cdn/shop/files/300965731BLUE_1.jpg?v=1705581454&width=300" alt="" srcset="" />
            <div className="my-cart-allhead flex flex-col gap-4">

            <h1 className='text-gray-400'>NUON</h1>
            <h1 className='text-2xl'>NUON Blue Embroidery</h1>
            <h1>Rs. 699</h1>
            <h1>Delivery in 6-7 Days   </h1>
            </div>
            </div>
            <div className="mycart-right flex gap-9 text-xl">
                <div className="quantity flex gap-5">
                    <button className='rounded-full border-2 border-gray-100 px-2 '>-</button>
                    1
                    <button className='rounded-full border-2 border-gray-100 px-2 '>+</button>
                </div>
                <div className="subtotal">RS.699</div>
                <div className="Delete"><FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon></div>
            </div>
        </div>
  )
}

export default MyCart