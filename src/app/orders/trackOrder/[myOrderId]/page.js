import React from 'react'

const page = (params) => {
    let id=(params['params'])['myOrderId']
    console.log("Params are:...................",params);
  return (
    <div className='my-24 h-fit w-fit   '>
        <div className='flex flex-col items-center m-auto  mx-64'>

    <h1 className='text-5xl'>Your Order Has Been Successfully Placed.....</h1>
    <h1 className='text-3xl my-8'>Your Order ID {id}</h1>
    <table className='my-7 text-xl'>
        <tr className='border-b-2 border-gray-300'>
            <td className='border-r-2 border-gray-300 px-9' >Nuon Black T-Shirt</td>
            <td className='px-5'>699</td>
        </tr>
        <tr className='border-b-2 border-gray-300'>
            <td className='border-r-2 border-gray-300 px-9' >Nuon Black T-Shirt</td>
            <td className='px-5'>699</td>
        </tr><tr className='border-b-2 border-gray-300'>
            <td className='border-r-2 border-gray-300 px-9' >Nuon Black T-Shirt</td>
            <td className='px-5'>699</td>
        </tr><tr className='border-b-2 border-gray-300'>
            <td className='border-r-2 border-gray-300 px-9' >Nuon Black T-Shirt</td>
            <td className='px-5'>699</td>
        </tr><tr className='border-b-2 border-gray-300'>
            <td className='border-r-2 border-gray-300 px-9' >Nuon Black T-Shirt</td>
            <td className='px-5'>699</td>
        </tr>
        <h1 className='font-bold text-xl text-center'>Total Amount:699</h1>
    </table>
    <button className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-lg'    >Track Order</button>
        </div>
    </div>
  )
}

export default page