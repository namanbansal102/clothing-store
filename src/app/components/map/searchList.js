'use client'
import React, { useState } from "react";

import SearchChildList from "./SearchChildList";
let data=0
async function getData() {
  // console.log("Get Data function is Running");
  fetch("http://localhost:3000/api/getAllSearchData") //1
  .then((response) => response.json()) //2
  .then((user) => {
    // console.log(user); //3
    data=user
  });
}
getData();
export default   function SearchList ({ input,popup }) {

  // console.log("Data in it is:::::",popup);
  const [renderData, setRenderData] = useState(data.search);
  const removeItem = (id) => {
    const newItem = renderData.filter((data2) => data2.id !== id);
    setRenderData(newItem);
  };
  return (
    <>
      {renderData.length > 0 && (
        <div className="container-searchList" id="modal">
          {renderData
            .filter((val) => {
              if (val.title.toLowerCase().includes(input.toLowerCase())) {
                return val;
              }
            })
            .map((item) => {
              const {title} = item;
              return (
                <>
                <div onClick={()=>{
                  popup(true)
                }}>

                  <SearchChildList
                    {...item}
                    removeItem={() => removeItem(title)}
                    />
                    </div>
                </>
              );
            })}
        </div>
      )}
    </>
  );
}
