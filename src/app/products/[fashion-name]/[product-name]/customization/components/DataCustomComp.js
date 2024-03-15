'use server'
import { patchFetch } from "next/dist/server/app-render/entry-base";
import ClientCompCustom from "./ClientCompCustom";
// import ProductShow from "./ProductShow";

const DataCustomComp =async ({outlet}) => {
  //  let  path=compN
  let path=outlet.compN
   console.log("Path is::::::::::::",outlet.compN);
  console.log(path);
    const fetchData = async () => {
        try {
          console.log("Fetch Data Function Running ..........................");
          const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/fetchProd`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ slug: path}),
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
    
      let newPromise =  
                new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                    resolve("Hello Geeks. Wrapped  setTimeout() in a promise"); 
                }, 100); 
            });
            let outData=await fetchData(); 
           
      console.log("OutData is ::::::::::::::::::::::::::::::::::::::::::",outData);
      
     
      
  return (
    <>
    <div><ClientCompCustom outlet={outData}></ClientCompCustom></div>
    </>
  )
}

export default DataCustomComp