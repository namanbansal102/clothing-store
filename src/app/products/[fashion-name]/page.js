'use client'
import React from 'react'
import Link from 'next/link'
import Product from '@/app/Productcard'
import FilterBar from '@/app/FilterBar'
import DataComponent from './[product-name]/components/DataComponent'
const page = async (slug) => {
  const k = (slug['params'])["fashion-name"];

  let data = await fetch(`${process.env.NEXT_PUBLIC_HOST}api/getProducts?query=${k}`)
  let newPromise =
    new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Hello Geeks. Wrapped  setTimeout() in a promise");
      }, 500);
    });
  let result = await newPromise;
  let json = await data.json()
  return (
    <>
      <div>
        <FilterBar outlet={json['products']}>
        </FilterBar>
      </div>
    </>
  )
}
export default page