import Link from "next/link";
import React from "react";

export default function SearchChildList({  img,slug,size, title, removeItem }) {
  return (
    <>
    <Link href={`${process.env.NEXT_PUBLIC_HOST}/products/${size.split("_")[0]}/${(slug.split(" ")).join("-")}`}>
      <div className="content-searchList" key={title}>
        <div className="flex">
          <img src={img} alt={title} className="content-image-searchList" />
          <p className="mleft">{title}</p>
        </div>
        <div>
          <button className="close-btn" onClick={removeItem}>
            
          </button>
        </div>
      </div>
    </Link>
    </>
  );
}
