// import React from 'react'

import { useState } from "react";

export default function InputBox() {

    //=============Normal Using state getting the value of the input box ============//
    
//     const [data, setData] = useState(null);

//     function getData(val){
//         console.log(val.target.value);
//         setData(val.target.value)
//     }
//   return (
//     <>
//         <div className="inputbox">
//             <h1>Input Box</h1>
//             <input type="text" onChange={getData}/>
//             <h2>The Input data is : {data}</h2>
//         </div>
//     </>
//     )


    const [data, setData] = useState(null);

    function getData(val){
        console.log(val.target.value);
        setData(val.target.value)
    }
  return (
    <>
        <div className="inputbox">
            <h1>Input Box</h1>
            <input type="text" onChange={getData}/>
            <h2>The Input data is : {data}</h2>
        </div>
    </>
    )
}
