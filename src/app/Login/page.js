import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center flex-col my-7'>
        <div className="upper-portion w-fit flex gap-6 justify-center items-center text-3xl">
            
            <div className="my-det">
                <h1> Hello! hi! Want's to Login </h1>
               
                <u>View Details</u>
            </div>
        </div>
        <div className="lower-portion my-5">
            <div className="buttons"></div>
            <div className="lower-right-portion">
                <h1 className='text-3xl my-3'>Login</h1>
                <h1 className='text-xl my-2 '>Enter Email</h1>
                <input className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Enter Email Address' />
                <h1 className='text-xl my-2 '>Enter password</h1>
                <input className='text-2xl shadow-sm border-2 h-16 border-gray-300 rounded-lg px-3' type="text" placeholder='Password Please' />
                <br />
                <button className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-lg my-3 text-xl'>Login</button>
                <h1 className='text-center'><Link href={'/SignUp'}><u>Do Not Have Account</u>
                </Link>
                </h1>
                
            </div>
        </div>

    </div>
  )
}

export default page