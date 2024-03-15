
// import { usePathname } from 'next/navigation'
import React from 'react'
import DataCustomComp from './components/DataCustomComp';

const page = (slug) => {
    console.log("Slug in Custom Component::::::::::::::::::::::::::::::::",(slug['params'])['product-name']);

  return (
    <div>
        <DataCustomComp outlet={{"compN":(slug['params'])['product-name']}} ></DataCustomComp>
    </div>
  )
}

export default page