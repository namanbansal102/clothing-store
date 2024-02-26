'use client'
import { GoogleLogin } from '@react-oauth/google';
import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const [name, setname] = useState(null);
    const handleChange=(e)=>{
        if (e.target.name==="name") {
            console.log(e.target.value);
            setname(e.target.value)
        }
        if (e.target.name==="email") {
            console.log(e.target.value);
            setemail(e.target.value)
        }
        if (e.target.name==='password') {
            console.log(e.target.value);
            setpassword(e.target.value)
        }
    }
    const handleClick=()=>{
        console.log("Handle Click is Running");
        console.log(email);
        console.log(password);
    fetch(`${process.env.NEXT_PUBLIC_HOST}api/signup`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,password}),
    }).then((a)=>a.json()).then((json)=>{
      if (json.success==true && json.token!=null) {
        toast("Sign Up Successfully!");
        document.cookie=`token=${JSON.stringify(json['token'])}`;
        console.log("Sign Up Successfully");
        router.push(`/`)
        router.refresh()
    }
    else{
        toast("Unable To Login");
        console.log("Unable To Login");
      }
      console.log(json);
    })
    }
  return (
    <div className='flex items-center justify-center flex-col my-7'>
        <div className="upper-portion w-fit flex gap-6 justify-center items-center text-3xl">
            
            <div className="my-det">
                <h1>Welcome ! Welcome!</h1>
               
                <u className='text-lg'>View Details</u>
            </div>
        </div>
        <div className="lower-portion my-5">
            <div className="buttons"></div>
            <div className="lower-right-portion">
                <h1 className='text-3xl my-3'>Sign Up</h1>
                <h1  className='text-xl my-2 '>Enter Your Name</h1>
                <input onChange={handleChange} name='name' className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Enter Name' />
                <h1 className='text-xl my-2 '>Enter Email</h1>
                <input name='email' onChange={handleChange} typeof='email' className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Enter Email Address' />
                <h1 className='text-xl my-2 '>Enter password</h1>
                <input name='password' onChange={handleChange} typeof='password' className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Password Please' />
                <br />
                <button onClick={handleClick} className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-lg my-3 text-xl'>Sign Up</button>
                <h1 className='text-center'><Link href={'/Login'}><u>Want's to Login</u>
                </Link>
                </h1>
                <div className='flex'>
<div className=' w-16'></div>
                <GoogleLogin 
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    document.cookie=`token="${credentialResponse['credential']}"`
    router.push('/')
    router.refresh()
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
  </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default page