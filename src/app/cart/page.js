'use server'
import { cookies } from 'next/headers'

import NetworkFetch from './components/NetworkFetch'

const page =async () => {
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
   <NetworkFetch store={CorrCookie}></NetworkFetch>
   </>
    )
}
  
  export default page