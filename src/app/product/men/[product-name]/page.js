'use client'
import React, { useEffect, useState } from 'react';
import PinCode from '@/app/PinCode';
import Spinner from '@/app/Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const Page = (params) => {
  const [show, setShow] = useState("ADD TO BAG");
  const [product, setProduct] = useState(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/fetchProd`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ slug: query }),
        });
        const newData = await response.json();

        if (newData.status === true && newData.myproduct != null) {
          const productData = newData.myproduct;
          setProduct(productData);
          if (getCookie(".westside." + (productData._id).substring(0, 10) + "_1")) {
            setShow("ALREADY IN BAG");
            setDisabled(true);
          }
        } else {
          console.log("Json Not Found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    if (product) {
      document.cookie = `${".westside." + product._id.substring(0, 10) + "_1"}=${JSON.stringify(product._id)}`;
      setShow("ALREADY IN BAG");
      setDisabled(true);
      toast("Item Added To Cart");
    }
  };

  let query = (params['params'])['product-name'];

  return (
    <>
      {product && (
        <div>
          <div className="whole-part flex flex-row my-9 mx-4 gap-9 justify-around">
            <Spinner outlet={"naman"} />
            <div className="left-portion  w-fit flex gap-9 ">
              <img className='h-[65vh] shadow-lg rounded-xl rotate-3  backdrop-blur-4xl' src={product.img} alt="" />
              <img className='h-[65vh] shadow-lg rounded-xl -rotate-3 grayscale' src={product.img} alt="" />
            </div>
            <div className="right-portion   my-37 w-45 text-justify ">
              <div className="right-portion-upper text-xl leading-10">
                <h1 className='font-thin text-gray-300'>{product.categories}</h1>
                <h1>{product.title}</h1>
                <h1>RS.{product.price} (Inclusive of All Taxes)</h1>
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
                <PinCode />
                <button disabled={disabled} onClick={handleClick} className=' bg-black h-20 w-full text-white disabled:bg-gray-700' >{show}</button>
                <div className="mydetails">
                  <details >
                    <summary>Product Details and Overview</summary>
                    <p >{product.desc}</p>
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
          </div>
          <ToastContainer />
        </div>
      )}
      {!product && (
        <div className='h-full w-full flex justify-center items-center'>
          <img className='my-8' src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
        </div>
      )}
    </>
  );
};

export default Page;
