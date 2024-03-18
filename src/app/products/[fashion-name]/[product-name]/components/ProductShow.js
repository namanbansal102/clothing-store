'use client'
import React, { useEffect, useRef, useState } from 'react';
import PinCode from '@/app/PinCodeProduct';
import Spinner from '@/app/Spinner/Spinner';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import Product from '@/app/Productcard';
import { usePathname } from 'next/navigation';

const ProductShow = (outlet) => {
  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY == 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }
    const [product, setProduct] = useState(null);
    let outcome=((outlet.outlet).outData)['product']
    let type=((outlet.outlet).outData)['slug']['fashion-name']
    
    const similar=(outlet.outlet).fetchSimilar
    let prop=outcome
    

    
    const [show, setShow] = useState("ADD TO BAG");
    const [disabled, setDisabled] = useState(false);
    // Here my Cookies is an Object
   
    
   
    const handleClick =async  () => {
      
      const id=prop._id
      
      
      document.cookie = `${".westside." + id.substring(0, 10) +"_"+type+"_1"}=${JSON.stringify(id)};path=/`;
      toast('Item Added To Cart');
      setShow("ALREADY IN BAG")
      setDisabled(true);
        
      };
      const [XS, setXS] = useState(false);
      const [S, setS] = useState(false);
      const [M, setM] = useState(true);
      const [L, setL] = useState(false);
      const [XL, setXL] = useState(false);
   
    const handleSize=(e)=>{
      const name=e.target.name;
      setXS(false);
      setS(false);
      setM(false);
      setL(false);
      setXL(false);
      if (name==='XS') {
        setXS(true)
      }
      if (name==='S') {
        
        setS(true)
      }
      if (name==='M') {
        setM(true)
        
      }
      if (name==='L') {
        setL(true)
        
      }
      if (name==='XL') {
        setXL(true)
        
      }
      toast.success(name+" Size Available")
    }
    const path=usePathname()
  return (
    <>
     
        <div className='overflow-x-hidden'>
        
          <div className="whole-part flex flex-row my-9 mx-4 gap-9 justify-around">

            <div className="left-portion  w-fit flex gap-9 ">
              <img className='h-[65vh] shadow-lg rounded-xl rotate-3  backdrop-blur-4xl' src={prop.img} alt="" />
              <img className='h-[65vh] shadow-lg rounded-xl -rotate-3 grayscale' src={prop.img} alt="" />
            </div>
            <div className="right-portion   my-37 w-45 text-justify ">
              <div className="right-portion-upper text-xl leading-10">
                <h1 className='font-thin text-gray-300'>{prop.category}</h1>
                <h1>{prop.title}</h1>
                <h1>RS.{prop.price} (Inclusive of All Taxes)</h1>
                <hr />
                <div className='border-t-2 border-gray-400 w-full h-0'></div>
                <h1>SIZE</h1>
                <div className="my-buttons text-lg flex flex-row gap-2 mx-3 my-3">
                  <button onClick={handleSize} name='XS' className={`border-2 bg-${XS?'black':'white'} text-${XS?'white':'black'} border-black  w-10 h-10 hover:bg-black hover:text-white`}>XS</button>
                  <button name='S' onClick={handleSize} className={`border-2 bg-${S?'black':'white'} text-${S?'white':'black'} border-black  w-10 h-10 hover:bg-black hover:text-white`}>S</button>
                  <button onClick={handleSize} name='M' className={`border-2 bg-${M?'black':'white'} text-${M?'white':'black'} border-black  w-10 h-10 hover:bg-black hover:text-white`}>M</button>
                  <button onClick={handleSize} name='L' className={`border-2 bg-${L?'black':'white'} text-${L?'white':'black'} border-black  w-10 h-10 hover:bg-black hover:text-white`}>L</button>
                  <button onClick={handleSize} name='XL' className={`border-2 bg-${XL?'black':'white'} text-${XL?'white':'black'} border-black  w-10 h-10 hover:bg-black hover:text-white`}>XL</button>
                </div>
                <PinCode></PinCode>
                <button disabled={disabled} onClick={handleClick} className=' bg-black h-20 w-full text-white disabled:bg-gray-700' >{show}</button>
                <Link href={`${path}/customization`}>
                <button   className=' my-8 text-black shadow-md h-10 rounded-lg w-full bg-white disabled:bg-gray-700 hover:bg-black hover:text-white' >CUSTOMIZE</button>
                </Link>
                <div className="mydetails">
                  <details >
                    <summary>Product Details and Overview</summary>
                    <p >Imports From USA California</p>
                  </details>
                  <details>
                    <summary>Delivery, Return & Exchange Policy</summary>
                    <p>Kick style quotient up a notch with the {prop.category} </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-similar-portion mx-11 my-4">
            <h1 className='text-2xl'>Similar Products</h1>
            <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },
    
    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
          <div ref={useHorizontalScroll()} style={{ overflow: "auto" }} className="similar-products flex gap-1 justify-center items-center overflow-x-auto my-8 no-scrollbar ">
            {similar.map((element)=>{
              return <Link scroll={true} href={`${process.env.NEXT_PUBLIC_HOST}products/${type}/${(element['title'].split(" ")).join("-")}`}><Product outletName={element} /></Link>;})}
        
             
            </div>
          </div>
        </div>
      {/* {!product && (
        <div className='h-full w-full flex justify-center items-center'>
        <img className='my-8' src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
        </div>
      )} */}
      
    </>
  )
}

export default ProductShow