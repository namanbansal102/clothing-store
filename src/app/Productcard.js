import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'
const Product = (props) => {
  const outlet=props.outletName
  console.log(outlet);
  let {title,slug,desc,img,category,size,quantity,price}=outlet
  console.log("................",outlet.title)
  return (
    <>
    
    <div className="div-card  w-72 my-4 mx-9 cursor-pointer shadow-xl hover:scale-105 transition-all duration-500">
        
        <img className='h-96' src={img} alt="" srcset="" />
        <div className="lower-card-portion">
            <h1 className='text-gray-400'>{title.split(" ")[0]}</h1>
            <h1 className='text-black'>{title}</h1>
            <h1>RS.{price}</h1>
        </div>
    </div>
    
    </>
  )
}

export default Product