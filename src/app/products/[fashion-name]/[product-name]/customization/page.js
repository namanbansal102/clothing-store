
// import { usePathname } from 'next/navigation'
import React from 'react'
import DataCustomComp from './components/DataCustomComp';

const page = (slug) => {
    console.log("Slug in Custom Component::::::::::::::::::::::::::::::::",(slug['params']));

  return (
    <div>
        <DataCustomComp outlet={{"compN":(slug['params'])}} ></DataCustomComp>
    </div>
  )
}

export default page