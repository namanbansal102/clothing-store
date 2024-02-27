import React from 'react'

import Link from 'next/link'
import Product from '@/app/Productcard'

const page = async () => {
  
  let data=await fetch(`${process.env.NEXT_PUBLIC_HOST}api/getProducts`)
  let newPromise =  
  new Promise(function (resolve, reject) { 
  setTimeout(function () { 
      resolve("Hello Geeks. Wrapped  setTimeout() in a promise"); 
  }, 500); 
}); 
let result = await newPromise; 
  let json=await data.json()
    return (
      <div className=' grid grid-cols-4 gap-4 '>
        {json['products'].map((element)=>{
          return <Link href={`men/${(element['slug'].split(" ")).join("-")}`}><Product outletName={element} /></Link>;
        })}
        </div>
  )
}

export default page