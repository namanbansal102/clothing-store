import React from 'react'

import Link from 'next/link'
import Product from '@/app/Productcard'
import FilterBar from '@/app/FilterBar'

const page = async () => {
  
  let data=await fetch(`${process.env.NEXT_PUBLIC_HOST}api/getProductsWomen`)
  let newPromise =  
  new Promise(function (resolve, reject) { 
  setTimeout(function () { 
      resolve("Hello Geeks. Wrapped  setTimeout() in a promise"); 
  }, 1000); 
}); 
let result = await newPromise; 
  let json=await data.json()
  
    return (
      <>
      <div>
        <FilterBar outlet={json['products']}></FilterBar>
        </div>
        </>
  )
}

export default page