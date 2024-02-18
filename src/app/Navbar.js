'use client'


import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from "next/image";
import Script from "next/script";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping, faCheck, faHeart, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React, { useState,useEffect } from "react";
import PopNav from './PopNav';
const Navbar =(outlet) => {
  console.log("In Navbar props outlet is:"+JSON.stringify(outlet));
  let prop=(outlet['outlet'])
  let getState="Login"
  if (prop['success']) {
    getState=(prop['data'])['name']
  }
  console.log("Props are"+prop);
  const [status, setstatus] = useState("Login")


  
  return (
    <div className=" h-32 flex  justify-around  items-center shadow-xl bg-transparent">
      {/* // Left Protion */}
      <img src="https://www.westside.com/cdn/shop/files/w-logo.png?v=1687335574&width=210" className=" h-14"></img>
      {/* Center Protion */}
      <div >

      <div className="outerClass flex gap-4 justify-center items-center p-1 border-2 border-black rounded-3xl my-2">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid fa-magnifying-glass" 
></FontAwesomeIcon>
      <input className=" h-12  border-2 border-red-300 w-full border-none outline-none rounded-xl font-medium text-xl bg-transparent placeholder-black" type="text" placeholder="Search For SweatShirts"/>
      
     </div>
     {/* Center Lowest Portion */}
     <div>
      <ul className=" flex gap-5 text-xl">
        <li className=" cursor-pointer text-red-400 font-semibold">Sale</li>
        <li className=" cursor-pointer hover:ext-gray-300"><Link href={'/'}>Home</Link></li>
        <li className=" cursor-pointer hover:text-gray-300"><Link href={'/products'}>Man</Link></li>
        <li className=" cursor-pointer hover:text-gray-300"><Link href={'/kids'}>Kids</Link></li>
        <li className=" cursor-pointer hover:text-gray-300"><Link href={'/beauty'}>Beauty</Link></li>
        <li className=" cursor-pointer hover:text-gray-300">Home</li>
        <li className=" cursor-pointer hover:text-gray-300">Brand</li>
        <li className=" cursor-pointer hover:text-gray-300">W-Style</li>
        <li className=" cursor-pointer hover:text-gray-300">View More</li>
      </ul>
      </div>
      </div>
    {/* Right Portion */}
    <div className=" w-fit h-fit flex gap-7  justify-center items-center font-medium text-2xl font-medium">
    <FontAwesomeIcon  icon={faHeart} className="fa-solid fa-magnifying-glass" 
></FontAwesomeIcon>
<Link href={'/cart'}><FontAwesomeIcon  icon={faBagShopping} className="fa-solid fa-magnifying-glass" 
></FontAwesomeIcon></Link>
<div className='flex flex-col'>
<ToastContainer />
<Link href={'/Login'}>
<button className="button bg-black text-white text-md px-3 rounded-md">{getState}</button>
</Link>
{/* <Popup  trigger={} modal>
    <span className=' flex bg-white flex-col gap-6 rounded-sm  '>
      <h1 className='text-black text-2xl'>Your Name:{status}</h1>
      <h1 className='text-black text-2xl'>Your email:{status}@gmail.com</h1>
      <button onClick={() => cookies.delete('token')} className="button bg-black w-fit  text-white text-md px-3 h-10 m-8 rounded-md">Logout</button></span>
  </Popup> */}

</div>
    </div>
    </div>
  )
}

export default Navbar