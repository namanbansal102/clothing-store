'use client'
import React, { useState } from 'react'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Product from './Productcard';
import Link from 'next/link';
const FilterBar = (params) => {
  const arr=params.outlet
  
  const [myarr, setmyarr] = useState(arr)
  const [change, setchange] = useState(50)
  const [loading, setloading] = useState(false)
  
let k=arr
  const handleChange=async (e)=>{
    setchange(e.target.value)
    setloading(true)
    console.log(change);
      let y=[]
        console.log("Hnadle Change is Running");

        let newPromise =  
  new Promise(function (resolve, reject) { 
  setTimeout(function () { 
      resolve("Hello Geeks. Wrapped  setTimeout() in a promise"); 
  }, 400); 
}); 

let result = await newPromise; 
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
             if (element['price']<=change*50) {
              y.push(element)
              
            }
        }
        setloading(false)
        setmyarr(y);
        console.log("Our k Array is",myarr);
        
    } 
  return (
    <>
    <div className='ml-[63vw]'>
    <div className="mysearchbar flex justify-center items-center gap-5 my-6">
    <h1 className='text-gray-300'>Filter</h1>
        <BsFillGrid3X3GapFill />
    <div className='mb-2'>

        <input value={change} onChange={handleChange} className='w-96 appearance-none bg-black myrange' type="range" />
    </div>
    </div>
    </div>
    {myarr.length==0 && <div className=''>
         <img className='h-52 m-auto' src="https://assets-v2.lottiefiles.com/a/0e30b444-117c-11ee-9b0d-0fd3804d46cd/BkQxD7wtnZ.gif"  />
        </div>
        }
        {loading==true && <div>
          <img className='h-52 m-auto mb-64 mt-28' src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" />
          </div>}
        {loading==false && <div>

        
      {myarr.length!=0 && <div className=' grid grid-cols-4 gap-4'>
        {myarr.map((element)=>{
          return <Link href={`men/${(element['slug'].split(" ")).join("-")}`}><Product outletName={element} /></Link>;
        })}
        
        </div>
        }
        </div>
        }

    </>
  )
}

export default FilterBar