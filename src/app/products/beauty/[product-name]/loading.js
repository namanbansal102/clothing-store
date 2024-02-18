import Spinner from '@/app/Spinner/Spinner'
import React from 'react'

const Loading = () => {
  
  return (
    <div className='h-full w-full my-52 flex items-center justify-center'>
    <Spinner></Spinner>
    </div>
  )
}

export default Loading