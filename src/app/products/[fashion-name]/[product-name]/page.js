import React from 'react'
import DataComponent from './components/DataComponent'

const page = (slug) => {
  console.log("Slug Slug Slug my In Particular page is page is page is page is page is ::::",(slug['params']));
  return (
    <>
    <DataComponent outlet={{'url':(slug['params'])}}>
    </DataComponent>
    </>
  )
}

export default page