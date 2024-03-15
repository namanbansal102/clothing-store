'use server'
import Link from 'next/link';
import React from 'react'
import Replicate from "replicate";

const replicate = new Replicate({
    auth: "r8_YAAL6JZowBpKtMkR3zZ2cArbBNNo0KD3wSYNH",
  });
  
const page = async (slug) => {
    
    const productName=(slug.params)["product-name"]
    const prompt=slug.searchParams.prompt
    const wear=slug.searchParams.wear
    const fetchData = async () => {
        try {
          console.log("Fetch Data Function Running ..........................");
          const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/fetchProd`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug: productName}),
          });
          const newData = await response.json();
  
          if (newData.status === true && newData.myproduct != null) {
            const productData = newData.myproduct;
            return productData;  
          } else {
            console.log("Json Not Found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
    
     
            let outData=await fetchData(); 
            console.log("The OutData Image Url is",outData.img);
    console.log("Slug in This Type of Data isL::::::::::::",prompt)
    const output = await replicate.run(
        "naklecha/fashion-ai:f203e9b8755a51b23f8ebdd80bb4f8b7177685b8d3fcca949abfbf8606b6d42a",
        {
          input: {
           image:"http:"+outData.img,
            prompt: prompt,
            clothing: wear
          }
        }
      );
     
    let newPromise =  
    new Promise(function (resolve, reject) { 
    setTimeout(function () { 
        resolve("Hello Geeks. Wrapped  setTimeout() in a promise"); 
    }, 10); 
});
let res=await newPromise
   
      console.log("Getting Output is :::::::::::::::::::::::::::::::::::::",output);
  return (
    <div className='h-full w-full flex items-center justify-center flex-col'>
        <h1 className='my-16'>Your Generated Image</h1>
        <img className='h-80 my-5rounded-md' src={output[3]} alt="" />
        <Link href={'/'}>
        <button   className='bg-black my-10 text-white  w-fit p-3 h-full font-light text-xl flex gap-5 hover:bg-white hover:text-black hover:shadow-lg'>Send Your Ideas</button>
        </Link>
        </div>
  )
}

export default page