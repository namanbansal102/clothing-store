'use client'
import { TypeAnimation } from 'react-type-animation';
import Popup from 'reactjs-popup';
import  LoadingBar  from "react-top-loading-bar";
import 'reactjs-popup/dist/index.css';
import Image from "next/image";
import Script from "next/script";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping, faCheck, faHeart, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import ReactSearchBox from "react-search-box";

import Link from "next/link";
import React, { useState,useEffect } from "react";
import { useRouter} from 'next/navigation';    
import PopNav from './PopNav';
const Navbar =(outlet) => {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];
  const [typeDis, settypeDis] = useState(false)
  const [search, setsearch] = useState("")
  const handleSearch=(e)=>{
    // console.log("handleSearch is Running");
    // console.log(e.target.value);
    settypeDis(true)
    setsearch(e.target.value)
    if (e.target.value="") {
      // console.log("If Condtion Satisfied");
      if (e.target.value="") {
        settypeDis(true)
        settypeDis(false)
      }
      
    }
  }
  const router = useRouter();
  let prop=(outlet['outlet'])
  let getState="Login"
  if (prop['success']) {
    getState=(prop['data'])['name']
  }

  const [status, setstatus] = useState("Login")
  var delete_cookie = function(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};
const [progress, setprogress] = useState(13)

// Force refresh the page


  
  return (
    <div className='z-50 bg-transparent sticky top-0 '>
   
    <div className=" h-32 flex  justify-around  items-center shadow-xl bg-transparent ">
      {/* // Left Protion */}
      <img src="https://www.westside.com/cdn/shop/files/w-logo.png?v=1687335574&width=210" className=" h-14"></img>
      {/* Center Protion */}
      <div >

      <div className="outerClass flex  justify-start px-6 items-center p-1 border-[1.5px] border-black rounded-3xl my-2 h-14">
      
<div hidden={typeDis}>
<TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Search For SweatShirts',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Search For Casuals',
        1000,
        'Search For Western Wears',
        1000,
        'Search For Ethnic Wears,Casuals ',
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em' }}
      repeat={Infinity}
      />
      </div>
      <div hidden={true} className="automate-search-box my-8 border-2 border-black">

      
        </div>
      <input onChange={handleSearch} value={search} className=" h-12  border-2 border-none font-extralight w-full border-2 border-black w-[623px] outline-none rounded-xl font-medium text-xl bg-transparent placeholder-blacka absolute" type="text" placeholder='' />
      
     </div>
     {/* Center Lowest Portion */}
     <div>
      <ul className=" flex gap-5 text-xl">
        <li className=" cursor-pointer text-red-400 font-semibold">Sale</li>
        <li className=" cursor-pointer hover:ext-gray-300"><Link href={'/'}>Home</Link></li>
        <li className=" cursor-pointer hover:text-gray-300"><Link href={'/products/men'}>Men</Link></li>
        <li className=" cursor-pointer hover:text-gray-300"><Link href={'/products/women'}>Women</Link></li>
        <li className=" cursor-pointer hover:text-gray-300"><Link href={'/products/kids'}>Kids</Link></li>
        <li className=" cursor-pointer hover:text-gray-300"><Link href={'/products/beauty'}>Beauty</Link></li>
        <li className=" cursor-pointer hover:text-gray-300"><Link href={'/products/brand'}>Brand</Link></li>
        <li className=" cursor-pointer hover:text-gray-300">W-Style</li>
        <li className=" cursor-pointer hover:text-gray-300">View More</li>
      </ul>
      </div>
      </div>
    {/* Right Portion */}
    <div className=" w-fit h-fit flex gap-7  justify-center items-center font-medium text-2xl font-medium">
    <img width="30" height="30" src="https://img.icons8.com/ios/50/like--v1.png" alt="like--v1"/>

    <Link href={'/cart'}>
      <img width="30" height="30" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
      </Link>
<div className='flex flex-col'>
<ToastContainer />
{/* <Link href={'/Login'}>
<button className="button bg-black text-white text-md px-3 rounded-md">{getState}</button>
</Link> */}
{getState=="Login" && <Link href={'/Login'}>
<button className="button  text-black text-md px-3 rounded-md font-light">{getState}</button>
</Link> }
{getState!="Login" &&
<Popup  trigger={
  <Link href={'/Login'}>
<button className="button text-black text-md px-3 rounded-md font-light">{getState}</button>
</Link>
} modal>
    <span className=' flex bg-white flex-col gap-6 rounded-sm  '>
      <h1 className='text-black text-2xl m-auto text-3xl'>Hi {getState}</h1> 
      <h1 className='text-black text-2xl'>Wants To Log Out</h1>
      <h1 className='text-black text-xl text-justify'>This Privacy Policy (“Policy“) is an ‘electronic record’ as contemplated under section 2(t) of the Information Technology Act, 2000 and the rules thereunder. This Policy being an electronic record is generated by a computer system and does not require any physical or digital signature.
The website www.westside.com ("Website") is operated by Trent Limited, a company incorporated under the Indian Companies Act 1913 ("Trent") having its registered office at Bombay House, 24 Homi Modi Street, Mumbai - 400001.</h1>

      <button onClick={() => {delete_cookie('token');
      router.refresh()
    }} className="button bg-black w-fit  text-white text-md px-3 h-10 m-8 rounded-md">Logout</button></span>
  </Popup>}

</div>
    </div>
    </div>
    </div>
  )
}

export default Navbar