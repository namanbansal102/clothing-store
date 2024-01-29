import React from 'react'

const page = () => {
  return (
    <div className='flex justify-around my-6 '>
        <div className="left-portion  w-fit flex flex-col mx-3 gap-5">
            <img className=' h-28 m-auto' src="https://www.westside.com/cdn/shop/files/w-logo.png?height=628&pad_color=fff&v=1687335574&width=1200" alt="" srcset="" />
            <h1 className='text-3xl text-gray-400'>CONTACT</h1>
            <div className="profile  flex items-center gap-7">
                <img className='h-10' src="https://cdn-icons-png.flaticon.com/128/11312/11312760.png" alt="" />
                <h1>Naman Bansal (abc@gmail.com)</h1>
            </div>
            <div className="uptoDate flex flex-row gap-3">
                <input type="checkbox" />
                <h1>Keep me up to date on news and exclusive offers through all channels,including WhatsApp</h1>
            </div>
                <h1 className='text-3xl'>Shipping Address</h1>
            <div className="form-option flex flex-col gap-7">
                <div className="name flex gap-3">

                <input type="text" className='text-2xl shadow-sm border-2 px-3 h-16 border-gray-300 rounded-lg' placeholder='FirstName' />
                <input type="text" className='text-2xl shadow-sm border-2 px-3 h-16 border-gray-300 rounded-lg' placeholder='LastName' />
                </div>
                <div>
<div className='flex gap-3  '>

                <input className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Address' />
                <input className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Apartment suite ' />
                </div>
</div>
                <div className="get-city flex gap-3">
                    <input className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg  px-3'  type="text" placeholder='City' />
                    <input className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3'  type="text" placeholder='State' />
                </div>
                    <input className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3'  type="text" placeholder='Pin Code' />
                <button className='h-16 w-64 rounded-xl m-auto bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black'>Continue To Shopping</button>
            </div>
        </div>
        <div className="right-portion border-2   border-gray-300 rounded-2xl p-6 w-70 shadow-lg ">
            <div className=' w-fit h-fit flex gap-2 items-center bg-gray-100 rounded-xl'>
            <img className='rounded-lg' src="https://cdn.shopify.com/s/files/1/0266/6276/4597/files/300965731BLUE_1_small.jpg?v=1705581454" alt="" srcset="" /> 
            <h1 className='text-2xl  font-bold'>Nuon Blue Embroidered Relaxed Fit T-Shirt</h1>
            </div>
            <div className='border-t-2 border-gay-200 w-full h-0 my-7'></div>
        <h1 className='text-2xl text-justify my-4'>Total Amount</h1>
        <h1 className='text-3xl my-3'>Rs.669</h1>
        <div className="gift-card flex gap-5">

        <input className='border-2 border-black text-2xl outline-none border-gray-300'  type="text" placeholder='Discount or Gift Card' />
        <button className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-lg'>Apply</button>
        </div>
        <div className="uptoDate flex flex-row gap-3 my-6">
                <input type="checkbox" />
                <h1 className='text-green-500'>Go Green - Opt for not returning online <br></br> and get a treat - further 5% off. Returns welcome at ANY Westside <br></br>Store though!</h1>
            </div>
        </div>
    </div>
  )
}

export default page