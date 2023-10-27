// import React from 'react'

import { useState } from "react";


//=============Normal Using state getting the value of the input box ============//

// export default function InputBox() {
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


export default function InputBox() {
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);

    function getData(val) {
        console.log(val.target.value);
        setData(val.target.value)
        
        // when user type the output get vanished and after clicking the button we will get the output.
        setPrint(false) 
    }
    return (
        <>
            <div className="inputbox">
                <h1>Input Box</h1>
                <input type="text" onChange={getData} />
                <button onClick={()=>{setPrint(true)}}> Get Value </button>
                {  print ? <h2>The Input data is :{data} </h2>: null}
                
            </div>
        </>
    )
}
