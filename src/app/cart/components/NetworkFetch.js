'use server'
import React from 'react'
import CartClient from './CartClient'

const NetworkFetch =async (store) => {
    const storeo=store['store']
    var total=0;
    console.log("Storeo is Storeo is Storeo is",storeo);
    const fetchData=async ()=>{
        let data=await fetch(`${process.env.NEXT_PUBLIC_HOST}api/getProd`, {
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
  return (
    <>
        <CartClient outlet={myjson}></CartClient>
    </>
  )
}

export default NetworkFetch