import React from 'react'
import ClientTrackOrder from './ClientTrackOrder';
// import { clientTrackOrder } from ";
const TrackOrderFetch =async  ({id}) => {
    console.log("Id in TrackOrder Fetch is>>>>>>>>>>>>>",id);
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/trackDetailsAndOrder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderId:id }),
      });
      const newData = await response.json();
  return (
    <ClientTrackOrder data={newData}></ClientTrackOrder>
  )
}

export default TrackOrderFetch