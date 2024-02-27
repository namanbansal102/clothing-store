'use client'
// import Image from "next/image";
import Script from "next/script";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBagShopping, faCartShopping, faCheck, faHeart, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
// import Link from "next/link";
// import Navbar from "./Navbar";
// import Footer from "./Footer";import { GoogleLogin,useGoogleOneTapLogin,googleLogout } from '@react-oauth/google';
// import MyGoogle from "./MyGoogle";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'

export default function Home( ) {
  
  <Script src="https://kit.fontawesome.com/70972682bd.js" strategy="lazyOnload"/>
  // googleLogout();
 
  
  return (
   <>
    <Carousel autoPlay={true} autoFocus={true} emulateTouch={true} infiniteLoop={true}>
    <div className="h-screen bg-[url('https://www.westside.com/cdn/shop/files/WESTERN-1_95b35468-f0c3-4393-819b-461ea9c7015d.jpg?v=1706342919')] bg-center bg-cover">
   </div>
    <div className="h-screen bg-[url('https://www.westside.com/cdn/shop/files/Westernwear_Web_3719792c-a1eb-4574-b260-f694c5d9f6ab.jpg?v=1708079639')] bg-center bg-cover">
   </div>
    <div className="h-screen bg-[url('https://www.westside.com/cdn/shop/files/Westernwear_Web_3719792c-a1eb-4574-b260-f694c5d9f6ab.jpg?v=1708079639')] bg-center bg-cover">
   </div>
    <div className="h-screen bg-[url('https://www.westside.com/cdn/shop/files/Kidswear_Web_de30e346-a9ad-4e3e-8a70-f252536b27ce.jpg?v=1708079983')] bg-center bg-cover">
   </div>
    <div className="h-screen bg-[url('https://www.westside.com/cdn/shop/files/Loungewear_Web_4165aac4-2805-464a-b253-402ef606e71e.jpg?v=1708084928')] bg-center bg-cover">
   </div>
                
             
            </Carousel>
   
   <div className="second-image">
    <img src="https://www.westside.com/cdn/shop/files/MAN_2_D.jpg?v=1706260775" alt=""  />
   </div>
   <div className="third-image">
    <img src="https://www.westside.com/cdn/shop/files/ETHNIC_3a1c9203-ec58-4889-b244-864ecc7d72c7.jpg?v=1706260597" alt=""  />
   </div>
   <div className="fourth-image">
    <img src="https://www.westside.com/cdn/shop/files/WS_Web_Hero_Banner_04_2945ec97-3eb4-4ddd-a080-a58c64aac7d1.jpg?v=1697194912" alt=""  />
   </div>
   </>
  );
}
