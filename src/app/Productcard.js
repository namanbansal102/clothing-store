import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const Product = (props) => {
  const outlet=props.outletName
 
  let {title,slug,desc,img,category,size,quantity,price}=outlet
  
  return (
    <>
    
    <div className="div-card   w-72 my-4 mx-9 cursor-pointer shadow-md hover:scale-105 transition-all duration-500">
    <FaRegHeart   onClick={()=>{
      localStorage.setItem(`myWestSide_${title}`,JSON.stringify({title,slug,desc,img}))
      toast("Item Added To WishList");
    }} className='text-2xl my-1 float-right mr-2 cursor-pointer absolute ' />
        <img className='h-96' src={img} alt="" srcset="" />
    
        <div className="lower-card-portion">
            <h1 className='text-gray-400'>{title.split(" ")[0]}</h1>
            <h1 className='text-black'>{title}</h1>
            <h1>₹ {price}</h1>
        </div>
        <ToastContainer />
    </div>
    
    </>
  )
}

export default Product