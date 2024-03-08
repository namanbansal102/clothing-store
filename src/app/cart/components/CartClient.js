'use client'

import React, { useEffect, useState } from 'react'
import MyCart from '../../MyCart'
import Link from 'next/link'

const CartClient = (outlet) => {
    const [total, settotal] = useState(0)
    
    let json=(outlet['outlet'])['k']
    const [tempArray, settempArray] = useState([])
    const joyt=[]
    console.log("json in Cart Fetched is:",json);
    const [discount, setdiscount] = useState(0)
  return (
    <>
    {json.length==0 && <div className='h-full w-full flex justify-around my-10 items-center flex-col gap-9'><img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" /><h1 className='text-5xl font-bold' >YOUR CART IS EMPTY</h1></div>}
    {json.length!=0 && <div className='wholeDiv  w-fit mx-4 my-8 flex gap-60'>
      <div className="whole-cart-big w-fit px-4  rounded-2xl shadow-md">
      <div className="cart-head flex items-center flex-col ">
      <div className="cart-head-right text-3xl my-3">Shopping Bag</div>
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
        {
          (json).map((element)=>{
            return <MyCart  outlet={{a:element,b:total,c:settotal}}></MyCart>

          })
        } 
        </div>
        </div>
        <div className="cart-right  text-xl my-32 mx-24  h-fit">
        <div className="get-amount leading-10">
        
        <h1 className='font-semibold text-3xl'>Total Amount</h1>
        <h1>Total Item&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{json.length}</h1>
        <h1>Total Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total}</h1>
    <h1>Discount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</h1> 
    <h1>Net Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total}</h1>
    </div>
    <Link href={'/orders'}>
    <button className='bg-black text-white h-12 w-full'  >Order Now</button>
    </Link>
    </div>
    </div>
  }
  </>
  )
}

export default CartClient