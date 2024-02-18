import React from 'react'
import ClientOrder from './components/ClientOrder';
import DataOrder from './components/DataOrder';
import { cookies } from 'next/headers';
const page = () => { 
  const CorrCookie=[]
  let cookieStore = cookies()
  console.log("in page.js Cookie Store is:",cookieStore);
  cookieStore=cookieStore.getAll()
  cookieStore.forEach(element => {
    console.log(element);
    let key=element["name"]
    console.log("key is::::::",key);
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