import React from 'react'
import Product from '../Productcard'
import Link from 'next/link'

const page = async () => {
  
  let data=await fetch("http://localhost:3000/api/getProducts")
  let json=await data.json()
    return (
      <div className=' grid grid-cols-4 gap-4 '>
        {json['products'].map((element)=>{
          return <Link href={`product/men/${(element['slug'].split(" ")).join("-")}`}><Product outletName={element} /></Link>
         
          ;
        })}
        </div>
  )
}

export default page