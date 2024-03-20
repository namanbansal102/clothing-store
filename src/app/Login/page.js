'use client'

import Link from 'next/link'
import React, { useState } from 'react'

import { GoogleLogin,useGoogleOneTapLogin } from '@react-oauth/google';
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation'
const page = () => {
  const router= useRouter()
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const handleChange=(e)=>{
        if (e.target.name==="email") {
 
            setemail(e.target.value)
        }
        if (e.target.name==='password') {
 
            setpassword(e.target.value)
        }
    }
    const handleClick=(e)=>{
      e.preventDefault();
       
    
    fetch(`${process.env.NEXT_PUBLIC_HOST}api/login`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,password}),
    }).then((a)=>a.json()).then((json)=>{
      if (json.success==true && json.token!=null) {
        toast.success("Login Success");
        document.cookie=`token=${JSON.stringify(json['token'])} path=/`;
        
        router.push(`/`)
        router.refresh()
    }
    else{
        toast.error("Invalid password");
     
      }
      
    })
    }
  return (
    <div className='flex items-center justify-center flex-col my-7'>
        <div className="upper-portion w-fit flex gap-6 justify-center items-center text-3xl">
            
            <div className="my-det">
                <h1> Hello! hi! Want's to Login </h1>
               
                <u className='text-lg'>View Details</u>
            </div>
        </div>
        <div className="lower-portion my-5">
            <div className="buttons"></div>
            <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },
    
    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
            <div className="lower-right-portion">
                <h1 className='text-3xl my-3'>Login</h1>
                <h1 className='text-xl my-2 '>Enter Email</h1>
                <form  onSubmit={handleClick} className=''>

                <input required={true} size={30}  maxLength={30} minLength={15}  name='email' onChange={handleChange}  className='shadow-sm border-2 h-16 border-black rounded-sm px-3' type="text" placeholder='Enter Email Address' />
                <h1 className='text-xl my-2 '>Enter password</h1>
                <input  required={true} size={30}  maxLength={15} minLength={5} name='password' type='password'  onChange={handleChange} className='shadow-sm border-2 h-16 border-black rounded-sm px-3'  placeholder='Password Please' />
                <br />
                <button  type='submit' className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-sm my-3 text-xl'>LOG IN</button>
                </form>
                <h1 className='text-center'><Link href={'/SignUp'}><u>Do Not Have Account</u>
                </Link>
                </h1>

                <div className='flex'>
<div className=' w-16'></div>
                <GoogleLogin 
  onSuccess={credentialResponse => {
 
    document.cookie=`token="${credentialResponse['credential']}";path=/`
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
        
    </div>
  )
}

export default page