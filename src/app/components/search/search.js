import React from "react";
import SearchList from "../map/searchList";



export default function Search({
  value,
  onChange,
  popup,
  setPopup,
  closePopup,
  mytype
}) {
  return (
    <div className="  absolute top-2  ">
      <div className="w-[30vw]"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
        onClick={closePopup}
      ></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="form"
      >
        <div className="input-container def">
          
          <div className="child-input-container ">
            <input
              type="text"
              className={popup ? "input h-full" : "input  h-min"}

              value={value}
              onChange={onChange}
              onClick={setPopup}
              
            />
          </div>
        </div>
        {popup && <SearchList input={value} popup={mytype} />}
      </form>
    </div>
  );
}
