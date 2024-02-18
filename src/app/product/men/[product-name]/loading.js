import Spinner from '@/app/Spinner/Spinner'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-full w-full border-2 border-black flex items-center justify-center'>
    <Spinner></Spinner>
    </div>
  )
}

export default Loading