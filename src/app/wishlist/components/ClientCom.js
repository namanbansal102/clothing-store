'use client'
import React from 'react'
import { useRouter } from "next/navigation"
import Link from 'next/link'
const ClientCom = (outlet) => {
    const router=useRouter()
    let items=outlet.outlet
    const handleClick=(value)=>{
        localStorage.removeItem(`myWestSide_${value.title}`);
                router.refresh()
    }
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col  items-center'>
  <h1 className='my-1 text-5xl font-thin mt-8 mb-6'>My Wishlist</h1>
  {items.length==0 && 
  <div>
    <h1 className='text-center'>Your List is Empty</h1>
    <img src="https://assets-v2.lottiefiles.com/a/744a57f2-116e-11ee-bbbc-230b4b2d893a/L9QBD6YcKC.gif" alt="" />
  </div>
  }
  {items.length!=0 && 
    <div className='grid grid-cols-8 mx-7  gap-7 mx-10 max-sm:grid-cols-2'>
       
        {items.map(({key,value})=>{
           
            
            return <> 
            <div className='card rounded-xl shadow-2xl py-5 '>
            <div className='inner-card flex justify-center items-center flex-col gap-4'>
            <Link className='flex justify-center items-center flex-col gap-4' href={`/products/${value['size'].split("_")[0]}/${(value['title'].split(" ")).join("-")}`}>
            <img  className='h-20 rounded-xl ' src={value.img}  />
            <h1 className='text-center'>{value.title}</h1>
            </Link>
            <button onClick={()=>{
                handleClick(value)
            }} className='bg-black rounded-md text-white  py-2 px-4 hover:bg-white hover:text-black hover:shadow-md'>Remove</button>
            </div>
        
        </div>
            </>
})
        }
    
    </div>
    }
    </div>
    )}
  

export default ClientCom