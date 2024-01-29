'use client'
import React, { useState } from 'react'

const PinCode = () => {
  const [pin, setPin] = useState(null);
  const [avalibiltiy, setavalibiltiy] = useState(false)
  const handleClick=()=>{
    
    console.log("Handle Click is Running");
    let data=fetch('http://localhost:3000/api/fetchpin', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({pin}),
    }).then((a)=>a.json()).then((json)=>{
      if (json.status=='available') {
        setavalibiltiy(true);
      }
      else{
        setavalibiltiy(false);
      }
      console.log(json);
    })

  }
  const handleChange=(e)=>{
    setPin(e.target.value)
  }
  return (
<>
    <div className='my-6 flex gap-3'>
    <input onChange={handleChange}  placeholder='Enter pin Code here' className='border-2 border-black'></input>
    <button className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black' onClick={handleClick}>Check</button>
    </div>
    {avalibiltiy && <h1 className='font-bold'>Delivery Within 3-7 Days</h1>}
    {pin && !avalibiltiy && <h1 className=' font-bold'>Sorry Not Reached At This Point</h1>}
    
</>
  )
  
}

export default PinCode