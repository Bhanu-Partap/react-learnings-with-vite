import React from "react"
import "./App.css"
// import { useState } from "react";


// export default function App() {
//   const [data, setData] = useState("M5")

//   function updateData() {
//     setData("BMW M5");
//   }

//   return (
//     <>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update the data</button>
//     </>
//   )
// }


 class App extends React.Component {
  render(){
    return (
      <>
        <h1>Hello </h1>
        <button>Update the data</button>
      </>
    )
  }
}

export default App ;