'use client'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState,useEffect, } from 'react'
import PinCode from '../../PinCode'


const ClientOrder = (outlet) => {
    
    let {meData,a}=outlet['outlet']
    console.log(meData);
    const router = useRouter()
    const [FName, setFName] = useState("")
    const [LName, setLName] = useState("")
    const [address, setaddress] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [pinCode, setpinCode] = useState("")
    const [disabled, setDisabled] = useState(false)
    const [pinparent, setpinparent] = useState(false)
    useEffect(() => {
        console.log("Use Effect is Running ");
        if (FName.length>=3 && FName.length>=3 && address.length>=3) {
            console.log("This Condition Runs");
            setDisabled(false)
        }
        if (FName.length<=3 ) {
            setDisabled(true)
        }
        if (LName.length<=3 ) {
            setDisabled(true)
        }
        if (address.length<=3 ) {
            setDisabled(true)
        }
     
    },[FName,LName,address,address,pinCode,pinparent])
    
   
    const handleChange=(e)=>{
        if (e.target.name==="FName") {
            console.log(e.target.value);
            setFName(e.target.value);
        }
        if (e.target.name==="LName") {
            setLName(e.target.value);
        }
        if (e.target.name==="address") {
            setaddress(e.target.value);
        }
        if (e.target.name==="city") {
            setcity(e.target.value);
        }
        if (e.target.name==="state") {
            setstate(e.target.value);
        }
        if (e.target.name==="pinCode") {
            setpinCode(e.target.value);
        }
        
    }
  return (
    <div className='flex justify-around my-6 '>
         
    <div className="left-portion  w-fit flex flex-col mx-3 gap-5">
        <img className=' h-28 m-auto' src="https://www.westside.com/cdn/shop/files/w-logo.png?height=628&pad_color=fff&v=1687335574&width=1200" />
        <h1 className='text-3xl text-gray-400'>CONTACT</h1>
        <div className="profile  flex items-center gap-7">
            <img className='h-10' src="https://cdn-icons-png.flaticon.com/128/11312/11312760.png" alt="" />
            <h1>Naman Bansal (abc@gmail.com)</h1>
        </div>
        <div className="uptoDate flex flex-row gap-3">
            <input type="checkbox" />
            <h1>Keep me up to date on news and exclusive offers through all channels,including WhatsApp</h1>
        </div>
        
            <h1 className='text-3xl'>Shipping Address</h1>
        <div className="form-option flex flex-col gap-7">
            <div className="name flex gap-3">

            <input name='FName' onChange={handleChange} type="text" className='text-2xl shadow-sm border-2 px-3 h-16 border-gray-300 rounded-lg' placeholder='FirstName' />
            <input name='LName' onChange={handleChange} type="text" className='text-2xl shadow-sm border-2 px-3 h-16 border-gray-300 rounded-lg' placeholder='LastName' />
            </div>
            <div>
<div className='flex gap-3  '>

            <input name='address' onChange={handleChange} className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Address' />
            <input name='apartment' onChange={handleChange} className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Apartment suite ' />
            </div>
</div>
            <PinCode outlet={{city,setcity,state,setstate,pinparent,setpinparent}}></PinCode>
            <div className="get-city flex gap-3">
                <input name='city'value={city} readOnly onChange={handleChange} className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg  px-3'  type="text" placeholder='City' />
                <input value={state}  readOnly name='state' onChange={handleChange} className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3'  type="text" placeholder='State' />
            </div>
            <button disabled={disabled}  className='disabled:bg-slate-500 disabled:border-none disabled:text-white h-16 w-64 rounded-xl m-auto bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black' onClick={()=>{
                (FName,LName,address,city,state,pinCode,meData['total'])
                }}>Continue To Shopping</button>
               
        </div>
    </div>
    <div className="right-portion border-2   border-gray-300 rounded-2xl p-6 w-70 shadow-lg ">
        {meData['items'].map((element)=>{
            return <div className='h-fit flex gap-2 items-center bg-gray-100 rounded-xl my-4'>
            <img className='rounded-lg h-24 w-20' src={element['img']}  /> 
            <h1 className='text-2xl  font-bold'>{element['title']}</h1>
            </div>
        })}
        <div className='border-t-2 border-gay-200 w-full h-0 my-7'></div>
    <h1 className='text-2xl text-justify my-4'>Total Amount</h1>
    <h1 className='text-3xl my-3'>Rs.{meData.total}</h1>
    <div className="gift-card flex gap-5">

    <input onChange={handleChange} className='border-2 border-black text-2xl outline-none border-gray-300'  type="text" placeholder='Discount or Gift Card' />
    <button className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-lg'>Apply</button>
    </div>
    <div className="uptoDate flex flex-row gap-3 my-6">
            <input type="checkbox" />
            <h1 className='text-green-500'>Go Green - Opt for not returning online <br></br> and get a treat - further 5% off. Returns welcome at ANY Westside <br></br>Store though!</h1>
        </div>
    </div>
</div>
  )
}

export default ClientOrder