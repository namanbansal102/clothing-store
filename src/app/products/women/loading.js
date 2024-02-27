import Spinner from '@/app/Spinner/Spinner'
import React from 'react'

const Loading = () => {
  
  return (
    <div className='h-full w-full  flex items-center justify-center'>
    <Spinner></Spinner>
    </div>
  )
}

export default Loading