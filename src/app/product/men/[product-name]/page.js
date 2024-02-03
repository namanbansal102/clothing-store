'use client'
import PinCode from '@/app/PinCode'
import Product from '@/app/Productcard'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page =async  (params) => {
  const [show, setshow] = useState("ADD TO BAG")
  useEffect(() => {
    console.log("Use Effect is Running");
  console.log("Getted item from localStroage is...........",localStorage.getItem((".westside."+_id.substring(0,10))));
    
      if (localStorage.getItem((".westside."+_id.substring(0,10)))!=null) {
        console.log("Satisifed if Condtion");
        setshow("ADDED TO BAG")
      }
      
    
  },[])
  
  
  let title=""
  let img=null
  let price=""
  let categories=""
  let quantity=0
  let desc=""
  let _id=""
  let query=(params['params'])['product-name']
  console.log("..................... my query is",query);
    let data=await fetch(`${process.env.NEXT_PUBLIC_HOST}api/fetchProd`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({slug:query}),
    })
    let json =await data.json()
      if (json.status==true && json['myproduct']!=null) {
        
        console.log("In Client Side .................................",json);
        _id=(json['myproduct'])['_id']
        img=(json['myproduct'])['img']
        title=(json['myproduct'])['title']
        price=(json['myproduct'])['price']
        categories=(json['myproduct'])['categories']
        quantity=(json['myproduct'])['quantity']
        desc=(json['myproduct'])['desc']
        console.log(_id);
        console.log(img);
      }
      else{
        console.log("Json Not Founded");
      }
      const handleClick=()=>{
          localStorage.setItem((".westside."+_id.substring(0,10)),_id);
          toast("Item Added To Cart")
        
        
      }
    
  return (
    <>
    {img==null && <div className='h-full w-full flex justify-center items-center'><img className='my-8' src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" /></div>}
    {img!=null && <div><div className="whole-part flex flex-row my-9 mx-4 gap-9 justify-around">
      <div className="left-portion  w-fit flex gap-9 ">
      <img className='h-[65vh] shadow-lg rounded-xl rotate-3  backdrop-blur-4xl' src={img} alt="" />
      <img className='h-[65vh] shadow-lg rounded-xl -rotate-3 grayscale' src={img} alt="" />
      </div>
      <div className="right-portion   my-37 w-45 text-justify ">
        <div className="right-portion-upper text-xl leading-10">
          <h1 className='font-thin text-gray-300'>{categories}</h1>
          <h1>{title}</h1>
          
          <h1>RS.{price} (Inclusive of All Taxes)</h1>
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
            <PinCode></PinCode>
          <button onClick={handleClick} className='bg-black h-20 w-full text-white' >{show}</button>
          <div className="mydetails">

          <details >
            <summary>Product Details and Overview</summary>
            <p >{desc}</p>
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
      
    </div>
  </div><ToastContainer /></div>
  }
    </>
  )
}

export default page