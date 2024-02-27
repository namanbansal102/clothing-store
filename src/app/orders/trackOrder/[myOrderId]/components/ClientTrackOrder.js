'use client'
import React from 'react'
const ClientTrackOrder = ({data}) => {
    // console.log("dsdsdsdsdsddsds",(data.data).userInfo);
  return (
    <div className='my-24 h-fit w-fit   '>
        <div className='flex flex-col items-center m-auto  mx-64'>

    <h1 className='text-5xl'>Your Order Has Been Successfully Placed.....</h1>
    <h1 className='text-3xl my-8'>Hi {(data.userInfo)['userEmail']} !</h1>
    <h1 className='text-3xl my-8'>Your Order has been Successfully Placed</h1>
    <table className='my-7 text-xl'>
        {(data.productInfo).map((element)=>{
            return <tr className='border-b-2 border-gray-300'>
            <td className='border-r-2 border-gray-300 px-9' >{element['title']}</td>
            <td className='px-5'>{element['price']}</td>
        </tr>
        })}
        
        
    </table> 
    <h1 className='font-bold text-xl text-center'>Total Amount:{(data.userInfo)['amount']/100}</h1>
    <button className='bg-black my-5 text-white px-2 py-2 hover:bg-white hover:text-black rounded-lg'    >Status: {(data.userInfo)['status']}</button>
        </div>
    </div>
  )
}

export default ClientTrackOrder