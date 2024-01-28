import React from 'react'

const Footer = () => {
  return (
    <div className='footer h-96 flex flex-row gap-7 justify-around items-center text-xl'>
        <div className="playstore flex gap-5 flex-col">
            <h1>DOWNLOAD THE APP</h1>
            <img className='cursor-pointer' src="https://cdn.shopify.com/s/files/1/0504/3457/2487/files/Frame_2.svg?v=1681220243" alt="" />
            <img className='cursor-pointer' src="https://cdn.shopify.com/s/files/1/0504/3457/2487/files/Frame_3.svg?v=1681220243" alt="" />
        </div>
        <div className="first-div-footer  w-fit  flex gap-5  flex-col px-3">
            <h1 className='font-bold'>SHOP</h1>
            <ul className='flex gap-5 flex-col text-gray-400'>
                <li className='cursor-pointer hover:text-black'>WOMAN</li>
                <li className='cursor-pointer hover:text-black'>MAN</li>
                <li className='cursor-pointer hover:text-black'>KIDS</li>
                <li className='cursor-pointer hover:text-black'>BEAUTY</li>
                <li className='cursor-pointer hover:text-black'>HOME</li>
            </ul>
        </div>
        <div className="second-div-footer  w-fit flex gap-5  flex-col px-3">
        <h1 className='font-bold'>STORES</h1>
            <ul className='flex gap-5 flex-col text-gray-400'>
                <li className='cursor-pointer hover:text-black'>ABOUT US</li>
                <li className='cursor-pointer hover:text-black'>CONTACT</li>
                <li className='cursor-pointer hover:text-black'>STORE LOCATOR</li>
                <li className='cursor-pointer hover:text-black'>SITE MAP</li>
                <li className='cursor-pointer hover:text-black'>MEMBERSHIP</li>
            </ul>
        </div>
        <div className="third-div-footer  w-fit  flex gap-5  flex-col px-3">
        <h1 className='font-bold'>JOIN NEWSLETTER</h1>
            <ul className='flex gap-5 flex-col'>
                <li>Get The Latest Updates By Subscribing Us</li>
                <li><input type="text" placeholder='Enter Email ID' className='border-b-2 border-black outline-none'/></li>
                <button className='bg-black text-white py-3'>SUBSCRIBE</button>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer