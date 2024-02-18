'use server'
import React from 'react'
import Navbar from '../Navbar'
import { cookies } from 'next/headers'
const NavDataComponent =async () => {
  const cookieStore = cookies()
  let myjson={success:false,data:null}
  let token = (cookieStore.get('token'))
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
      }).then((a)=>a.json()).then((json)=>{
        if (json.success==true && json.data!=null) {
          // console.log("My json in Navbar Returning is,.,.,.,::::::::::::::::::::::::::",json);
          myjson=json
        }else{
          myjson=json
          // console.log("My json in Navbar Returning is,.,.,.,::::::::::::::::::::::::::",myjson);
      }
  
      })}
  return (
    <>
    <Navbar outlet={myjson}></Navbar>
    </>
  )
}

export default NavDataComponent