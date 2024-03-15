'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'topwear', 'bottomwear'
  ];
//   const replicate = new Replicate({
//     auth: "r8_HlMzJ3Nb4iSxw7VC1wpcsQ4ESn33ylW1vf1CR",
//   });
  

  const defaultOption = options[0];
const ClientCompCustom = ({outlet}) => {
    const [val, setVal] = useState("")
    const [hide, sethide] = useState(false)
    const [change, setchange] = useState(defaultOption)
    
  return (
    <div className='flex items-center justify-evenly gap-10'>
        <img className='h-[70vh] m-11 rounded-xl' src={outlet.img} alt="Custom-Img" />

        <div className="right-div flex flex-col gap-20">
        <div className='flex gap-4 flex-col'>
            <h1 className='text-3xl'>{outlet.title}</h1>
<Dropdown options={options}  onChange={(e)=>{
    setchange(e.value)
    
}}  value={change} placeholder="Select an option" />
        </div>
            <h1 className='text-justify text-xl'>Elevate your style with personalized clothing. Share your design preferences,<br></br> and we'll deliver your unique garment in just a few days.</h1>
            <div>
            <h1>
</h1>

            <div className="input-div  flex items-center justify-center h-16">
            
            <input value={val} onChange={(e)=>{
                setVal(e.target.value);
            }} className='border-2 border-black h-16 text-2xl rounded-sm p-5' placeholder='Enter Your Prompt Here' type="text" name="propt" id="prompt" />
            <Link href={{
    pathname: `/products/men/${((outlet.slug).split(" ")).join("-")}/customization/getoP`,
    query: { prompt: val,wear:change },
  }}>
            <button className='bg-black text-white  w-fit p-3 h-full font-light text-xl flex gap-5 hover:bg-white hover:text-black hover:shadow-lg'>Generate
            <h1 className='font-bold text-3xl animate-bounce rotate-45'>&rarr;</h1></button>
            </Link>
            </div>
            </div>
        </div>
        </div>
  )
}

export default ClientCompCustom