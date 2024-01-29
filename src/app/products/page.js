import React from 'react'
import Product from '../Productcard'

const page = async () => {
  
  let data=await fetch("http://localhost:3000/api/getProducts")
  let json=await data.json()
  console.log(json['products']);
    return (
      <div className=' grid grid-cols-4 gap-4 '>
        {json['products'].map((element)=>{
          return <Product />;
        })}
        </div>
  )
}

export default page