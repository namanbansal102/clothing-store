'use server'

import { patchFetch } from "next/dist/server/app-render/entry-base";
import ProductShow from "./ProductShow";

const DataComponent =async (outlet) => {
  console.log("outlet in Client Side is:::::::::::::::::::::::::::::::::::::::::", (outlet['outlet'])['url']);
    const fetchData = async () => {
        try {
          console.log("Fetch Data Function Running ..........................");
          const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/fetchProd`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug: (outlet['outlet'])['url'] }),
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
                }, 500); 
            }); 
            let result = await newPromise; 
      let outData=await fetchData();
      console.log("OutData is ::::::::::::::::::::::::::::::::::::::::::",outData);
      
      let fetchSimilar=await fetchSimilarProducts(outData);
      
  return (
    <>
    <ProductShow outlet={{outData,fetchSimilar}}></ProductShow>
    </>
  )
}

export default DataComponent