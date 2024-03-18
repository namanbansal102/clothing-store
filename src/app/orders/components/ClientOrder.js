'use client'
import { faL } from '@fortawesome/free-solid-svg-icons'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useState,useEffect, } from 'react'
import PinCode from '../../PinCode'
import data from "../../../../data/coupon.json";
import toast from 'react-hot-toast'

const ClientOrder = (outlet) => {
  
  let {meData,a}=outlet['outlet'];
  
  const [total, settotal] = useState(0)
  // settotal(meData.total)
  console.log("Outlet is:::::::::::::::::::::::::::::::::::::",outlet);
  console.log("My data Of Coupon is:::::::",data);
  const makePayment = async (FName,LName,address,city,state,pinCode,totalAmount,prodInfo) => {
    
    console.log("Make Payment Function is Running",FName,LName,address,city,state,pinCode,totalAmount);
    const initializeRazorpay = () => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        // document.body.appendChild(script);
        
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        
        document.body.appendChild(script);
      });
    };
    var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        const res = await initializeRazorpay();
        if (!res) {
          alert("Razorpay SDK Failed to load");
          return;
        }
        // Make API call to the serverless API
        const data = await fetch("http://localhost:3000/api/paymentGate", { method: "POST",headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({FName,LName,address,city,state,pinCode,totalAmount,prodInfo,id:a}) }).then((t) =>
            t.json()
          );
          console.log(data);
  
          var options = {
            key: process.env.KEY_ID, // Enter the Key ID generated from the Dashboard
            name: "Westide Clothing",
            currency: "INR",
            amount: total-discount,
            order_id: data.id,
            description: "Thankyou For Purchasing From Our Store",
            image: "https://www.westside.com/cdn/shop/files/w-logo.png?v=1687335574&width=210",
            handler: function (response) {
              // Validate payment at server - using webhooks is a better idea.
              router.push(`/orders/trackOrder/${response.razorpay_order_id}`,{scroll:false})
             
    
            },
            prefill: {
              name: FName,
              email:FName,
              contact: "9068808000",
            },
          };
          
          const paymentObject = new window.Razorpay(options);
          paymentObject.open();
        };
        console.log(meData);
        const router = useRouter()
        const [discount, setdiscount] = useState(0);
        const [coupon, setcoupon] = useState("");
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
          settotal(meData.total)
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
          
        },[FName,LName,address,address,pinCode,pinparent,discount])
        
        
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
          if(e.target.name=='gift'){
            setcoupon(e.target.value);
          }
          
        }
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>........<<<<<<<<<<<<<",a['name']);
        return (
          <div className='flex justify-around my-6 '>
         
    <div className="left-portion  w-fit flex flex-col mx-3 gap-5">
        <img className=' h-28 m-auto' src="https://www.westside.com/cdn/shop/files/w-logo.png?height=628&pad_color=fff&v=1687335574&width=1200" />
        <h1 className='text-3xl text-gray-400'>CONTACT</h1>
        <div className="profile  flex items-center gap-7">
            <img className='h-10' src="https://cdn-icons-png.flaticon.com/128/11312/11312760.png" alt="" />
            <h1>{(a.data)['name']} {(a.data)['email']}</h1>
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
              makePayment(FName,LName,address,city,state,pinCode,meData['total'],meData['items'])
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
    <h1 className='text-3xl my-3'>Rs.{total-discount}</h1>
    {/* <h1 className='text-3xl my-3'>Rs.{total}</h1> */}
    <div className="gift-card flex gap-5">

    <input name='gift' value={coupon} onChange={handleChange} className='border-2 border-black text-2xl outline-none border-gray-300'  type="text" placeholder='Discount or Gift Card' />
    <button onClick={()=>{

      let k=0;
      if (coupon.length<=2) {
        toast.error("Please Enter a Valid Coupon");
        return;
      }
    for (let i = 0; i < data.length; i++) {
      console.log("Traversing For Loop");
      
      const element = data[i];
      const key=element['coupon'];
      const value=element['amount'];
      
      if (key==coupon) {
        console.log("Coupon key is Equal to My key",discount);
        setdiscount(value);
        k=1;
        break;
      }
    }
    if (k==1) {
      toast.success("Horrahy Coupon Applied");
    }else{
      toast.error("Invalid Coupon");
      
    }
  
    }} className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-sm'>Apply</button>
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