'use client'
import React, { useEffect, useState } from 'react'
import MyCart from '../MyCart'

const page =() => {
  const [tempArray, settempArray] = useState([])
  const [total, settotal] = useState(0)
  const [discount, setdiscount] = useState(0)
  const [json, setjson] = useState([]);
  const [localStorageItems, setlocalStorageItems] = useState([]);
  useEffect(() => {
    const localStorageItemsArray = [];
    
    for (const localStorageItem of Object.keys(localStorage)) {
      const val = localStorageItem.split(".");
      if (val[1] === 'westside') {
        localStorageItemsArray.push({ id: localStorage.getItem(localStorageItem) });
      }
    }
    settempArray(localStorageItemsArray)
    console.log("localStorageItemsArray:::::::",localStorageItemsArray);

    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000/api/getProd", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({arr:localStorageItemsArray}), // Send as JSON
        });
        const mydata = await response.json();

        // Update state with fetched data and calculated values
        setjson(mydata['arr']);
        
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors gracefully, e.g., display an error message
      }
    }
    
    
    fetchData();
    
  },[]);
  
  console.log("Json is::::::::::::::::::::::::",json);
  
  return (
    <>
    {tempArray.length==0 && <div className='h-full w-full flex justify-around my-10 items-center flex-col gap-9'><img src="https://bakestudio.in/assets/images/cart/empty-cart.gif" alt="" /><h1 className='text-5xl font-bold' >YOUR CART IS EMPTY</h1></div>}
    {tempArray.length!=0 && <div className='wholeDiv  w-fit mx-4 my-8 flex gap-60'>
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
            return <MyCart outlet={element}></MyCart>
          })
        } 
        </div>
        </div>
        <div className="cart-right  text-xl my-32 mx-24  h-fit">
        <div className="get-amount leading-10">
        
        <h1 className='font-semibold text-3xl'>Total Amount</h1>
        <h1>Total Item&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4</h1>
        <h1 onLoad={()=>{
          for (let i = 0; i  < json.length; i++) {
            let element = (json[i])['price'] ;
            settotal(total+element)
          }
          
        }}>Total Amount&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{total}</h1>
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