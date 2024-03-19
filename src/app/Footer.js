'use client'
import Link from 'next/link'
import React, { useState } from 'react' 
const Footer = () => {
    const [email, setEmail] = useState("")
  return (
    <div className='footer h-96 flex flex-row gap-7 justify-around items-center text-xl max-sm:flex-col max-sm:gap-7'>
        <div className="playstore flex gap-5 flex-col">
            <h1>DOWNLOAD THE APP</h1>
            <img className='cursor-pointer max-sm:w-56' src="https://cdn.shopify.com/s/files/1/0504/3457/2487/files/Frame_2.svg?v=1681220243" alt="" />
            <img className='cursor-pointer max-sm:w-56' src="https://cdn.shopify.com/s/files/1/0504/3457/2487/files/Frame_3.svg?v=1681220243" alt="" />
        </div>
        <div className="first-div-footer  w-fit  flex gap-5  flex-col px-3 max-sm:hidden ">
            <h1 className='font-bold'>SHOP</h1>
            <ul className='flex gap-5 flex-col text-gray-400'>
                <Link href={'/products/men'}>
                <li className='cursor-pointer hover:text-black'>MEN</li>
                </Link>
                <Link href={'/products/women'}>
                <li className='cursor-pointer hover:text-black'>WOMEN</li>
                </Link>
                <Link href={'/products/beauty'}>
                <li className='cursor-pointer hover:text-black'>BRAND</li>
                </Link>
                <Link href={'/products/brand'}>
                <li className='cursor-pointer hover:text-black'>BEAUTY</li>
                </Link>
                <Link href={'/products/kids'}>
                    <li className='cursor-pointer hover:text-black'>KIDS</li>
                    </Link>
               
            </ul>
        </div>
        <div className="second-div-footer  w-fit flex gap-5  flex-col px-3 max-sm:hidden">
        <h1 className='font-bold'>STORES</h1>
            <ul className='flex gap-5 flex-col text-gray-400'>
                <Link href={'/about'}>
                <li className='cursor-pointer hover:text-black'>ABOUT US</li>
                </Link>
                <Link href={'/membership'}>
                <li className='cursor-pointer hover:text-black'>MEMBERSHIP</li>
                </Link>
                <Link href={'/contact'}>
                <li className='cursor-pointer hover:text-black'>CONTACT</li>
                </Link>
                <Link href={'/storeLocator'}>
                <li className='cursor-pointer hover:text-black'>STORE LOCATOR</li>
                </Link>
                
                {/* <li className='cursor-pointer hover:text-black'>SITE MAP</li> */}
                <li className='cursor-pointer hover:text-black'>MEMBERSHIP</li>
            </ul>
        </div>
        <div className="third-div-footer  w-fit  flex gap-5  flex-col px-3">
        <h1 className='font-bold'>JOIN NEWSLETTER</h1>
            <ul className='flex gap-5 flex-col'>
                <li className='max-sm:text-center'>Get The Latest Updates By Subscribing Us</li>
                <li><input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder='Enter Email ID'  className='border-b-2 border-black outline-none'/></li>
                <button   className='bg-black text-white py-3 px-1'>SUBSCRIBE</button>
                
            </ul>
        </div>
    </div>
  )
}

export default Footer