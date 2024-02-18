'use server'
import { cookies } from 'next/headers'

import NetworkFetch from './components/NetworkFetch'

const page =async () => {
  let cookieStore = cookies()
  cookieStore=cookieStore.getAll()
  console.log("in page.js Cookie Store is:",cookieStore);
  return (
   <>
   <NetworkFetch store={cookieStore}></NetworkFetch>
   </>
    )
}
  
  export default page