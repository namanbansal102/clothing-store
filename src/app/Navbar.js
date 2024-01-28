import Image from "next/image";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping, faCheck, faHeart, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import React from "react";


const Navbar = () => {
  return (
    <div className=" h-32 flex  justify-around  items-center">
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
        <li className=" cursor-pointer">Sale</li>
        <li className=" cursor-pointer hover:ext-gray-300">Home</li>
        <li className=" cursor-pointer hover:text-gray-300">Man</li>
        <li className=" cursor-pointer hover:text-gray-300">Kids</li>
        <li className=" cursor-pointer hover:text-gray-300">Beauty</li>
        <li className=" cursor-pointer hover:text-gray-300">Home</li>
        <li className=" cursor-pointer hover:text-gray-300">Brand</li>
        <li className=" cursor-pointer hover:text-gray-300">W-Style</li>
        <li className=" cursor-pointer hover:text-gray-300">View More</li>
      </ul>
      </div>
      </div>
    {/* Right Portion */}
    <div className="  w-fit h-fit flex gap-4  justify-center items-center font-medium text-2xl font-medium">
    <FontAwesomeIcon icon={faHeart} className="fa-solid fa-magnifying-glass" 
></FontAwesomeIcon>
    <FontAwesomeIcon icon={faBagShopping} className="fa-solid fa-magnifying-glass" 
></FontAwesomeIcon>
<Link href='about'>Sign In</Link>
    </div>
    </div>
  )
}

export default Navbar