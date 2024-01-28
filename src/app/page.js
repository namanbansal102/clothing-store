import Image from "next/image";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping, faCheck, faHeart, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";


export default function Home( ) {
  <Script src="https://kit.fontawesome.com/70972682bd.js" strategy="lazyOnload"/>
  return (
   <>
   <div className="h-screen bg-[url('https://www.westside.com/cdn/shop/files/WESTERN-1_95b35468-f0c3-4393-819b-461ea9c7015d.jpg?v=1706342919')] bg-center bg-cover">
   
   </div>
   <div className="second-image">
    <img src="https://www.westside.com/cdn/shop/files/MAN_2_D.jpg?v=1706260775" alt="" srcset="" />
   </div>
   <div className="third-image">
    <img src="https://www.westside.com/cdn/shop/files/ETHNIC_3a1c9203-ec58-4889-b244-864ecc7d72c7.jpg?v=1706260597" alt="" srcset="" />
   </div>
   <div className="fourth-image">
    <img src="https://www.westside.com/cdn/shop/files/WS_Web_Hero_Banner_04_2945ec97-3eb4-4ddd-a080-a58c64aac7d1.jpg?v=1697194912" alt="" srcset="" />
   </div>
   
   </>
  );
}
