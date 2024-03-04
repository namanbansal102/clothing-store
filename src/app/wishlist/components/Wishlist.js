
import React from 'react'
import ClientCom from './ClientCom';
async function allStorage  () {

    var values = [],
        keys = await Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        let key=keys[i];
        if (key.split("_")[0]=='myWestSide') {
            values.push( {key:keys[i],value:JSON.parse(localStorage.getItem(keys[i]))} );
        }
    }

    return values;
}
const Wishlist = async() => {
    let items=[];
   
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('key', 'value');
            items =await allStorage()
          } else if (typeof sessionStorage !== 'undefined') {
            // Fallback to sessionStorage if localStorage is not supported
            sessionStorage.setItem('key', 'value');
          } else {
            // If neither localStorage nor sessionStorage is supported
            console.log('Web Storage is not supported in this environment.');
          }
            // Perform localStorage action
           
          
  
  return (
    <>
    <ClientCom outlet={items}/>
    </>
    
  )
}

export default Wishlist