import React from 'react'
import DataComponent from './components/DataComponent'

const page = (slug) => {
  console.log("Slug Slug Slug my",(slug['params'])['product-name']);
  return (
    <>
    
    <DataComponent outlet={{'url':(slug['params'])['product-name']}}>
    </DataComponent>
    </>
  )
}

export default page