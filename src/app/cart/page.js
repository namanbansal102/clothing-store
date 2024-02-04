'use client'
import React, { useEffect, useState } from 'react'
import MyCart from '../MyCart'

const page =() => {
  const [tempArray, settempArray] = useState([])
  const joyt=[]
  const [total, settotal] = useState(0)
  const [discount, setdiscount] = useState(0)
  function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1 ; i <= theCookies.length; i++) {
      aString += i + ' ' + theCookies[i-1] + "\n";
    }
    return aString;
  }
  const [json, setjson] = useState([]);
  useEffect(() => {
    setjson([])
  console.log("use Effect is Running");
  fetch(`${process.env.NEXT_PUBLIC_HOST}api/getProd`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: "65b7f1ab995e10c4f1419024" }), // Send as JSON
  })
    .then((response) => response.json())
    .then((k) => {
      console.log("k is::::::::::::::::::::::::::", k);
      const isItemDuplicate = json.some((item) => item._id === k.myproduct._id);

      if (!isItemDuplicate) {
        console.log("is item Duplicated Running ");
        setjson((prevJson) => [...prevJson, k.myproduct]);
      }
    })
}, []); // Empty dependency array means this effect runs only once after the initial render

  if (json.length!=0) {
    console.log("Json has Some Data");
    console.log(json);
    for (let i = 0; i  < json.length; i++) {
      let element = (json[i])['price'] ;
      console.log(element);
      
    }
  }else{
    console.log("Json lenght equal to 0");

  }
  
  console.log("Json is::::::::::::::::::::::::",json);
  
  return (
    <>
    {json.length==0 && <div className='h-full w-full flex justify-around my-10 items-center flex-col gap-9'><img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" /><h1 className='text-5xl font-bold' >YOUR CART IS EMPTY</h1></div>}
    {json.length!=0 && <div className='wholeDiv  w-fit mx-4 my-8 flex gap-60'>
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
        {
          (json).map((element)=>{
            return <MyCart  outlet={element}></MyCart>
          })
        } 
        </div>
        </div>
        <div className="cart-right  text-xl my-32 mx-24  h-fit">
        <div className="get-amount leading-10">
        
        <h1 className='font-semibold text-3xl'>Total Amount</h1>
        <h1>Total Item&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4</h1>
        <h1>Total Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total}</h1>
    <h1>Discount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0</h1> 
    <h1>Net Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total}</h1>
    </div>
    <button className='bg-black text-white h-12 w-full' >Order Now</button>
    </div>
    </div>
  }
  </>
    )
  }
  
  export default page