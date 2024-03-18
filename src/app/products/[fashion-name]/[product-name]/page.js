import React from 'react'
import DataComponent from './components/DataComponent'

const page = (slug) => {
 
  return (
    <>
    <DataComponent outlet={{'url':(slug['params'])}}>
    </DataComponent>
    </>
  )
}

export default page