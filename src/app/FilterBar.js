'use client'
import React, { useState } from 'react'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Product from './Productcard';
import Link from 'next/link';
import Sidebar from './Sidebar';

const FilterBar = (params) => {
  const arr=params.outlet
  console.log("Arr in Client side is:",arr);
  const [myarr, setmyarr] = useState(arr)
  const [change, setchange] = useState(50)
  const [loading, setloading] = useState(false)
  const [boxClick, setBoxClick] = useState(false)
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
    const handleSort=()=>{
      console.log("Handle Sort Is Running");

    }
    const handleLower=(e)=>{
      console.log("Handle Lower is Running`");
      setBoxClick(e.target.value)
      console.log(e.target.value);
    }
  return (
    <>
  
    <div className='ml-[53vw]'>
    <div className="mysearchbar flex justify-center items-center gap-5 my-6">
    
        <BsFillGrid3X3GapFill />
    <div className='mb-2'>
        <input value={change} onChange={handleChange} className='w-96 appearance-none bg-black myrange' type="range" />
    </div>
    <h1 className='text-gray-300 underline cursor-pointer hover:text-black'>Filter</h1>
    <div className="1st-div flex gap-2">
    <input type="checkbox" />
    <h1 className='text-gray-300 cursor-pointer hover:text-black'>H-L</h1>
    </div>
    <div className="2nd-div flex gap-2">
    <input onChange={handleLower} value={boxClick} type="checkbox" />
    <h1 className='text-gray-300 cursor-pointer hover:text-black'>L-H</h1>
    </div>
    {/* <Sidebar /> */}
    
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
          return <Link  href={`${element['size'].split("_")[0]}/${(element['slug'].split(" ")).join("-")}`}><Product outletName={element} /></Link>;
        })}
        
        </div>
        }
        </div>
        }

    </>
  )
}

export default FilterBar