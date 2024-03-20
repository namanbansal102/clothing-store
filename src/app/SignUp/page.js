'use client'
import OtpInput from 'react-otp-input';

import { GoogleLogin } from '@react-oauth/google';
import Link from 'next/link'
import React, { useState } from 'react'

import ReCAPTCHA from "react-google-recaptcha";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
const page = () => {
  const router= useRouter()
  const [otp, setOtp] = useState('');
    const [disabled, setdisabled] = useState(true)
    const [otpState, setotpState] = useState(true)
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);
    const [name, setname] = useState(null);
    const [oneNumber, setOneNumber] = useState(null);
    const [twoNumber, settwoNumber] = useState(null);
    const [threeNumber, setthreeNumber] = useState(null);
    const [fourNumber, setfourNumber] = useState(null);
    const [OtpDisabled, setOtpDisabled] = useState(false)
    const [otpUi,setotpUi]=useState(true)
    const handleChange=(e)=>{
        if (e.target.name==="name") {
        
            setname(e.target.value)
        }
        if (e.target.name==="email") {
        
            setemail(e.target.value)
        }
        if (e.target.name==='password') {
        
            setpassword(e.target.value)
        }
        if (e.target.name==='one') {
          
            setOneNumber(e.target.value)
          
        }
          if (e.target.name==='two') {
  
            settwoNumber(e.target.value)
        }
        if (e.target.name==='three') {
            setthreeNumber(e.target.value)  
        }
        if (e.target.name==='four') {
            setfourNumber(e.target.value)
        }
    }
    function onChange(value) {
    
      setdisabled(false)

    }

    
    const handleClick=(e)=>{
    
        e.preventDefault();
    fetch(`${process.env.NEXT_PUBLIC_HOST}api/signup`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name,email,password}),
    }).then((a)=>a.json()).then((json)=>{
      
      if (json.success==true) {

        toast.success("OTP has been Sent Successfully");
        // document.cookie=`token=${JSON.stringify(json['token'])};path=/`;
        
        setotpState(false)
        
        
    }
    else{
        toast.error("Unable To Login");
       
      }
      
    })
    }
    const handleFormSubmit=(e)=>{
      e.preventDefault();
        
      fetch(`${process.env.NEXT_PUBLIC_HOST}api/signup`, {
        method: 'PUT',
        headers: {  
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"clientOtp":Number(oneNumber+twoNumber+threeNumber+fourNumber)}),
      }).then((a)=>a.json()).then((json)=>{
        if (json.success==true && json.token!=null) {
          toast.success("Sign Up Successfully");
          document.cookie=`token=${JSON.stringify(json['token'])};path=/`;
          console.log("Sign Up Successfully");
          router.push(`/`)
          router.refresh()
      }
      else{
          toast.error("Error To Login");

        }
        console.log(json);
      })


    }
  return (
    <>
    {otpState==true && 
      
    <div className='flex items-center justify-center flex-col my-7'>
        <div className="upper-portion w-fit flex gap-6 justify-center items-center text-3xl">
            
            <div className="my-det">
                <h1>Sign Up To WestSide </h1>
               
                {/* <u className='text-lg'>View Details</u> */}
            </div>
        </div>
        <div className="lower-portion my-5">
            <div className="buttons"></div>
            <div className="lower-right-portion">
                <h1 className='text-3xl my-3'>Sign Up</h1>
                <h1  className='text-xl my-2 '>Enter Your Name</h1>
                <form  method="post" onSubmit={handleClick}>

                <input required={true} minLength={2} maxLength={23} onChange={handleChange} name='name' className='text-xl shadow-sm border-2 h-16 border-black rounded-sm px-3' type="text" placeholder='Enter Name' />
                <h1 className='text-xl my-2 '>Enter Email</h1>
                <input required={true} minLength={10} maxLength={53} name='email' onChange={handleChange} typeof='email' className='text-xl shadow-sm border-2 h-16 border-black rounded-sm px-3 bg-white' type="text" placeholder='Enter Email Address' />
                <h1 className='text-xl my-2 '>Enter password</h1>
                <input required={true} minLength={5}maxLength={23}  name='password' onChange={handleChange} type='password' className='text-xl shadow-sm border-2 h-16 border-black rounded-sm px-3 bg-white' placeholder='Password Please' />
                <br />  
                <div className='my-4'>
                <ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
    onChange={onChange}
    />
    </div>
    
                <button type='submit' disabled={disabled}  className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-sm my-3 text-xl disabled:bg-slate-700 disabled:cursor-not-allowed disabled:text-white'>Sign Up</button>
    </form>
                <h1 className='text-center'><Link href={'/Login'}><u>Want's to Login</u>
                </Link>
                </h1>
                
                <div className='flex'>
<div className=' w-16'></div>
                <GoogleLogin 
  onSuccess={credentialResponse => {
   
    document.cookie=`token="${credentialResponse['credential']};path=/"`
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
     
       
        </div>}
    {!otpState && <div>
      
      <div className="mybox flex flex-col  items-center justify-center my-28">

      <h1 className='text-3xl max-sm:text-center'>Enter Otp To Confirm Your Account</h1>
      <div class="prompt flex items-center justify-center my-10 gap-7">
        <form className='flex items-center justify-center my-10 gap-7 flex-col' action="POST" onSubmit={handleFormSubmit}>
      <div className='flex items-center justify-center gap-7'>

      <input  type="number" min={0} max={9}  name='one'  onChange={handleChange}  value={oneNumber}  className='border-black h-20 w-16 border-2 font-bold text-3xl p-3' />
      <input type="number" min={0} max={9} name='two'  readOnly={OtpDisabled}onChange={handleChange} value={twoNumber}  className='border-black h-20 w-16 border-2 font-bold text-3xl p-3'  />
      <input type="number" min={0} max={9} name='three' readOnly={OtpDisabled} onChange={handleChange} value={threeNumber}  className='border-black h-20 w-16 border-2 font-bold text-3xl p-3'  />
      <input type="number" min={0} max={9} name='four' readOnly={OtpDisabled} onChange={handleChange}  value={fourNumber} className='border-black h-20 w-16 border-2 font-bold text-3xl p-3'  />
      </div>
      <button type='submit' className='bg-black p-2 text-white'>Verify</button>
        </form>
     
      
      </div>
</div>


      </div>}
  </>
  )
}

export default page