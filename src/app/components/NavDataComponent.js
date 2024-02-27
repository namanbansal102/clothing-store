'use server'
import React from 'react'
import Navbar from '../Navbar'
import { cookies } from 'next/headers'
const NavDataComponent =async () => {
  
  const cookieStore = cookies()
  let myjson={success:false,data:null}
  let token = (cookieStore.get('token'))
  // console.log("In Nav Data Component Token Val is",token);
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
          // console.log("My json in Navbar Returning is,.,.,.,::::::::::::::::::::::::::",json);
          myjson=json
        }else{
          // console.log("My json in Navbar Returning is,.,.,.,::::::::::::::::::::::::::",myjson);
          myjson=json
      }
  
      })}
  return (
    <>
    <Navbar outlet={myjson}></Navbar>
    </>
  )
}

export default NavDataComponent