import React from 'react'
import TrackOrderFetch from './components/TrackOrderFetch';

const page = (params) => {
    let id=(params['params'])['myOrderId']
    console.log("Params are:...................",params);
  return (
    <TrackOrderFetch id={id}></TrackOrderFetch>
  )
}

export default page