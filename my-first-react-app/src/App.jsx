import React from "react"
import "./App.css"

//================ Functional Component State Change ===================//
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


//================ Class Component State Change ===================//

 class App extends React.Component {
  constructor(){
    super();
    this.state ={
      data:"BMW"
    }
  }

  apple(){
    alert("Apllee there")
  }

  render(){
    return (
      <>
        <h1>Hello </h1>
        <button onClick={()=>{this.apple}}>Update the data</button>
      </>
    )
  }
}

export default App ;