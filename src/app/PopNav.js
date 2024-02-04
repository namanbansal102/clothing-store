'use client'
import React, { useState } from 'react'

const PopNav = (props) => {
    const [name, setname] = useState("Sign In")
    const [email, setemail] = useState("")
    console.log(".................",(props['outlet'])['data']);
    setname((props['outlet'])['data'])
    console.log(name);
    
  return (
    <div className=' h-16 h-fit px-3 text-2xl rounded-xl shadow-2xl  shadow-gray-200'>
        <h1>dssd</h1>
    </div>
  )
}

export default PopNav