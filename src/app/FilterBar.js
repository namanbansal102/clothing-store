'use client'
import React, { useState } from 'react'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
const FilterBar = () => {
  const [change, setchange] = useState(50)
  
    const handleChange=(e)=>{
        console.log("Hnadle Change is Running");
        setchange(e.target.value)
        console.log(change);
    } 
  return (
    <div className='border-2 border-black'>
    <div className="mysearchbar flex justify-center items-center gap-5 my-6">
    <h1 className='text-gray-300'>Filter</h1>
        <BsFillGrid3X3GapFill />
    <div className='mb-2'>

        <input value={change} onChange={handleChange} className='w-96 appearance-none bg-black myrange' type="range" />
    </div>
    </div>
    </div>
  )
}

export default FilterBar