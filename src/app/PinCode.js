import React from 'react'

const PinCode = () => {
  return (
    <div className='my-6 flex gap-3'>
    <input placeholder='Enter pin Code here' className='border-2 border-black'></input>
    <button className='bg-black text-white px-2 py-2 hover:bg-white hover:text-black'>Check</button>
    </div>
  )
}

export default PinCode