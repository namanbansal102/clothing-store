'use server'

import { patchFetch } from "next/dist/server/app-render/entry-base";
import ProductShow from "./ProductShow";

const DataComponent =async (outlet) => {
  
    const fetchData = async () => {
        try {
         
          const response = await fetch(`https://clothing-store-naman.vercel.app/api/fetchProd`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug: ((outlet['outlet'])['url']) }),
          });
          const newData = await response.json();
  
          if (newData.status === true && newData.myproduct != null) {
            const productData = {product:newData.myproduct,slug:((outlet['outlet'])['url'])};
            return productData;  
          } else {
            console.log("Json Not Found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      const fetchSimilarProducts=async (params)=>{
        
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/getSimilarProducts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: params}),
        });
        const newData = await response.json();
        
        if (newData.status === true && newData.myproduct != null) {
          const productData = newData.myproduct;
          return productData;  
        } else {
          console.log("Json Not Found");
        }
      }
      let newPromise =  
                new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                    resolve("Hello Geeks. Wrapped  setTimeout() in a promise"); 
                }, 100); 
            }); 
            let result = await newPromise; 
      let outData=await fetchData();
      
      console.log("outData is is is is is is",outData);
      let fetchSimilar=await fetchSimilarProducts(outData);
      
  return (
    <>
    {outData==undefined && <div> <div className='h-full w-full flex justify-center items-center'>
        <img className='my-8' src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" alt="" />
        </div></div>}
    {outData!=undefined &&
    <ProductShow outlet={{outData,fetchSimilar}}></ProductShow>}
    </>
  )
}

export default DataComponent