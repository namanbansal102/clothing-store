import React from 'react'
import ClientOrder from './components/ClientOrder';
import DataOrder from './components/DataOrder';
import { cookies } from 'next/headers';
const page = () => { 
  const CorrCookie=[]
  let cookieStore = cookies()
 
  cookieStore=cookieStore.getAll()
  cookieStore.forEach(element => {
    
    let key=element["name"]
  
    key=key.split('.')
    if (key[1]=='westside') {
    CorrCookie.push(element)
    }
  });

  return (
    <>
    <DataOrder store={CorrCookie}></DataOrder>
    </>
  )
}

export default page