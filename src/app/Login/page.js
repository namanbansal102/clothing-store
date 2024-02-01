'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const page = () => {
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const handleChange=(e)=>{
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
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email,password}),
    }).then((a)=>a.json()).then((json)=>{
      if (json.success==true && json.token!=null) {
        toast("Login Successfully!");
        localStorage.setItem('token',JSON.stringify(json))
        console.log("Login Successfully");
    }
    else{
        toast("Invalid password");
        console.log("Login Not  Successfully");
      }
      console.log(json);
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
            <div className="lower-right-portion">
                <h1 className='text-3xl my-3'>Login</h1>
                <h1 className='text-xl my-2 '>Enter Email</h1>
                <input name='email' onChange={handleChange}  className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Enter Email Address' />
                <h1 className='text-xl my-2 '>Enter password</h1>
                <input name='password'  onChange={handleChange} className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Password Please' />
                <br />
                <button onClick={handleClick} className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-lg my-3 text-xl'>Login</button>
                <h1 className='text-center'><Link href={'/SignUp'}><u>Do Not Have Account</u>
                </Link>
                </h1>
                
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default page