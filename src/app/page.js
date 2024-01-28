import Image from "next/image";
import Script from "next/script";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCartShopping, faCheck, faHeart, faMagnifyingGlass, faTrash } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Navbar from "./Navbar";


export default function Home( ) {
  <Script src="https://kit.fontawesome.com/70972682bd.js" strategy="lazyOnload"/>
  return (
   <>
   <div className="border-2 border-red-200 h-screen bg-[url('https://www.westside.com/cdn/shop/files/FRAGRANCE_abd956ea-14e0-4df2-81b8-9983146f08bf.jpg?v=1706338908')] bg-center bg-cover">
   <Navbar></Navbar>
   </div>
   </>
  );
}
