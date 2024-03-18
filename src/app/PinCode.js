'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast';


const PinCode = (params) => {
  console.log(params);
  const [pin, setPin] = useState(null);
  const [avalibiltiy, setavalibiltiy] = useState(false)
  const handleClick=()=>{
    
    console.log("Handle Click is Running");
    let data=fetch(`${process.env.NEXT_PUBLIC_HOST}api/fetchpin`, {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({pin}),
    }).then((a)=>a.json()).then((json)=>{
      if (json.status=='available') {
        setavalibiltiy(true);
        let k=(params['outlet'])['setstate']
        let ko=(params['outlet'])['setcity']
        k(json['state'])
        ko(json['Block'])
        toast.success("Item Can Be Delivered To This Path")
      }
      else{
        setavalibiltiy(false);
        toast.error("Sorry Can't be Delivered!");
      }
      console.log(json);
    })

  }
  const handleChange=(e)=>{
    setPin(e.target.value)
    let pinparent=params['outlet']['setpinparent']
    pinparent(e.target.value)
  }
  return (
<>

    <div className='my-2 flex gap-3'>
    
    <input onChange={handleChange}  placeholder='Enter pin Code here' className='border-2 border-gray-400 h-16 rounded-lg px-3'></input>
    
    <button className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black rounded-lg px-5' onClick={handleClick}>Check</button>
    </div>
    {avalibiltiy && <h1 className='font-bold'>Delivery Within 3-7 Days</h1>}
    {pin && !avalibiltiy && <h1 className=' font-bold'>Sorry Not Reached At This Point</h1>}
    

</>
  )
  
}

export default PinCode