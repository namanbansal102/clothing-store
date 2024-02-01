import { faDeleteLeft, faRemove } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const MyCart = (props) => {
  let outlet=props['outlet']
  // {_id: '65b7f1ab995e10c4f1419024', title: 'Nuon Brown Abstract Printed Relaxed Fit Shirt', img: 'https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300962224BROWN_1.jpg?v=1704953937', category: 'codes-wear', size: 'codes-wear', …}
  return (
    <div className="mycart shadow-lg my-4 w-fit flex gap-7 items-center px-4">
            <div className="mycart-left flex gap-7 text-xl">
            <img className='h-64' src={outlet['img']} />
            <div className="my-cart-allhead flex flex-col gap-4">
            <h1 className='text-gray-400'>{outlet['title'].split(" ")[0]}</h1>
            <h1 className='text-2xl'>{outlet['title']}</h1>
            <h1>{outlet['price']}</h1>
            <h1>Delivery in 6-7 Days   </h1>
            </div>
            </div>
            <div className="mycart-right flex gap-5 text-xl">
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