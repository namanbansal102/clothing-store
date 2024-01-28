import React from 'react'
import MyCart from '../MyCart'

const page = () => {
  return (
    <div className='wholeDiv  w-fit mx-4 my-8 flex gap-60'>
        <div className="whole-cart-big w-fit px-4  rounded-2xl shadow-md">

        <div className="cart-head flex items-center flex-col ">
            <div className="cart-head-right text-3xl my-3">Shopping Bag (03)</div>
            <div className="card-head-left">
                <ul className='flex gap-5 items-center '>
                    <li><button className='bg-black w-8 h-8 text-white my-2 mx-2'>1</button>Bag </li>
                    <div className='border-t-2 border-black w-5 h-0'></div>
                    <li><button className='bg-black w-8 h-8 text-white my-2 mx-2'>2</button>Details</li>
                    <div className='border-t-2 border-black w-5 h-0'></div>
                    <li><button className='bg-black w-8 h-8 text-white my-2 mx-2'>3</button>Payment</li>

                </ul>
            </div>
            
        </div>
        <div className="myitems flex flex-col gap-4">

        <MyCart></MyCart>
        <MyCart></MyCart>
        <MyCart></MyCart>
        <MyCart></MyCart>
        </div>
        </div>
        <div className="cart-right  text-xl my-32 mx-33">
            <div className="get-amount leading-10">

    <h1 className='font-semibold text-3xl'>Total Amount</h1>
    <h1>Total Item&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4</h1>
    <h1>Total Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1345</h1>
    <h1>Discount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</h1> 
    <h1>Net Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1343</h1>
            </div>
            <button className='bg-black text-white h-12 w-full' >Order Now</button>
        </div>
    </div>
  )
}

export default page