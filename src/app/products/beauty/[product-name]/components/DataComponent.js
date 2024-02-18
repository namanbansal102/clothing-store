'use server'

import ProductShow from "./ProductShow";

const DataComponent =async (outlet) => {
  console.log("query in Data Component is:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"+outlet);
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
      let newPromise =  
                new Promise(function (resolve, reject) { 
                setTimeout(function () { 
                    resolve("Hello Geeks. Wrapped  setTimeout() in a promise"); 
                }, 3000); 
            }); 
            let result = await newPromise; 
      let outData=await fetchData();
  return (
    <>
    <ProductShow outlet={outData}></ProductShow>
    </>
  )
}

export default DataComponent