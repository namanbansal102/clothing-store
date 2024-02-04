'use client'
import PinCode from '@/app/PinCode'
import Product from '@/app/Productcard'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page =(params) => {
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  const [show, setshow] = useState("ADD TO BAG")
  const [json, setjson] = useState([])
  const [title, settitle] = useState("")
  const [disabled, setdisabled] = useState(false)
    const [img, setimg] = useState(null)
    const [price, setprice] = useState("")
    const [categories, setcategories] = useState("")
    const [quantity, setquantity] = useState("")
    const [desc, setdesc] = useState("")
    const [id, setid] = useState("")
  
  useEffect(() => {
    
    fetch(`${process.env.NEXT_PUBLIC_HOST}api/fetchProd`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug: query }),
    })
      .then((response) => response.json())
      .then((newData) => {
        console.log("newData is::::::::::::::::::::::::::::::::::::::::", newData);
    
        if (newData.status === true && newData.myproduct != null) {
          console.log("In Client Side .................................", newData);
    
          const productData = newData.myproduct; // Store myproduct in a variable for clarity
    
          setid(productData._id);
          setimg(productData.img);
          settitle(productData.title);
          setprice(productData.price);
          setcategories(productData.categories);
          setquantity(productData.quantity);
          setdesc(productData.desc);
          if (getCookie(".westside."+(productData._id).substring(0,10)+"_1")) {
            console.log("Getting Cookie Already");
            setshow("ALREADY IN BAG")
            setdisabled(true)
          }
          
        } else {
          console.log("Json Not Found");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle errors here
      });
    },[show])
  
    
    
    let query=(params['params'])['product-name']
    console.log("..................... my query is",query);
    
    const handleClick=()=>{
      
      document.cookie=`${".westside."+id.substring(0,10)+"_1"}=${JSON.stringify(id)}`;
      setshow("ALREADY IN BAG")
      setdisabled(true)
      toast("Item Added To Cart")
      
        
      }
    
  return (
    <>
    {img==null && <div className='h-full w-full flex justify-center items-center'><img className='my-8' src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" /></div>}
    {img!=null && <div><div className="whole-part flex flex-row my-9 mx-4 gap-9 justify-around">
      <div className="left-portion  w-fit flex gap-9 ">
      <img className='h-[65vh] shadow-lg rounded-xl rotate-3  backdrop-blur-4xl' src={img} alt="" />
      <img className='h-[65vh] shadow-lg rounded-xl -rotate-3 grayscale' src={img} alt="" />
      </div>
      <div className="right-portion   my-37 w-45 text-justify ">
        <div className="right-portion-upper text-xl leading-10">
          <h1 className='font-thin text-gray-300'>{categories}</h1>
          <h1>{title}</h1>
          
          <h1>RS.{price} (Inclusive of All Taxes)</h1>
          <hr />
          <div className='border-t-2 border-gray-400 w-full h-0'></div>
          <h1>SIZE</h1>
          <div className="my-buttons text-lg flex flex-row gap-2 mx-3 my-3">
            <button className='border-2 border-black w-10 h-10  hover:bg-black hover:text-white'>XS</button>
            <button className='border-2 border-black  w-10 h-10 hover:bg-black hover:text-white'>S</button>
            <button className='border-2 border-black  w-10 h-10 hover:bg-black hover:text-white'>M</button>
            <button className='border-2 border-black  w-10 h-10 hover:bg-black hover:text-white'>L</button>
            <button className='border-2 border-black  w-10 h-10 hover:bg-black hover:text-white'>XL</button>
          </div>
            <PinCode></PinCode>
          <button disabled={disabled} onClick={handleClick} className=' bg-black h-20 w-full text-white disabled:bg-gray-700' >{show}</button>
          <div className="mydetails">

          <details >
            <summary>Product Details and Overview</summary>
            <p >{desc}</p>
          </details>
          <details>
            <summary>Delivery, Return & Exchange Policy</summary>
            <p>Kick your style quotient up a notch with the Nuon t-shirt. Black canvas boasting a round neckline, short sleeves, and a contrast print infused with elegant embroidery details, this t-shirt effortlessly blends comfort and trendiness. Pair it with high-waisted jeans and sneakers for an effortlessly chic look.</p>
          </details>
          </div>
        </div>
      </div>
      
    </div>
    <div className="lower-similar-portion mx-11 my-4">
    <h1 className='text-2xl'>Similar Products</h1>
    <div className="similar-products flex">
      
    </div>
  </div><ToastContainer /></div>
  }
    </>
  )
}

export default page