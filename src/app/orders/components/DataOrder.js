'use server'
import React from 'react'
import { cookies } from 'next/headers'
import ClientOrder from './ClientOrder';
// import PaymentComponent from './paymentComponent'
const DataOrder =async(store) => {
    const storeo=store['store']
    var total=0;
   
    const fetchData=async ()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_HOST}api/finalOrder`, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({ id: storeo}), // Send as JSON
         })
         let json=await data.json()
         return json;
        }
         
       // Empty dependency array means this effect runs only once after the initial render
     
     let myjson=await fetchData()
     let myjsonToken={success:false,data:null}
     const getVerifyTokenUser=async ()=>{
      const cookieStore = cookies()
      let token = (cookieStore.get('token'))
      
      let newPromise =  
      new Promise(function (resolve, reject) { 
      setTimeout(function () { 
          resolve("Hello Geeks. Wrapped  setTimeout() in a promise"); 
      }, 300); 
    }); 
    
      if (token!=undefined) {
      token=token['value']
      let tokenVal=token.split('"')
      tokenVal=tokenVal[1];
        await fetch(`${process.env.NEXT_PUBLIC_HOST}api/cookieProd`, {
            method: 'POST',
            headers: {  
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({token:tokenVal}),
          }).then((a)=>a.json()).then(async (json)=>{
            let result = await newPromise; 
            if (json.success==true && json.data!=null) {
             
              myjsonToken=json
            }else{
              
              myjsonToken=json
          }
      
          })}
     }
     await getVerifyTokenUser()

     
  return (
    <>
    <ClientOrder outlet={{meData:myjson,a:myjsonToken}}></ClientOrder>
     
    </>
  )
}

export default DataOrder