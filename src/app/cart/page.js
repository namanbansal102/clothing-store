'use server'
import { cookies } from 'next/headers'

import NetworkFetch from './components/NetworkFetch'

const page =async () => {
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
   <NetworkFetch store={CorrCookie}></NetworkFetch>
   </>
    )
}
  
  export default page