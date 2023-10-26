// import React from "react"
// import { useState } from "react";
import "./App.css"
import Student from "./Components/Student";

//================ Functional Component State Change ===================//
// import { useState } from "react";

export default function App() {

//=================State Change ==========================================//
  // const [data, setData] = useState("M5")

  // function updateData() {
  //   setData("BMW M5");
  // }

  return (
    <>
      {/* <h1>{data}</h1>
      <button onClick={updateData}>Update the data</button> */}

{/* ==============+++++++++Props passing+++++++++++===================== */}

      <Student name="Lamborghini" email= "support.lamborghini@gmail.com" other= {{address:"Italy", Number: "50"}} />
      <Student name="PORSCHE GT3 RS" email= "support.porsche@gmail.com" other= {{address:"Germany", Number: "21"}} />
      <Student name="Koneigsegg" email= "support.koneigsegg@gmail.com" other= {{address:"Germany", Number: "24"}}/>
    </>
  )
}


//================ Class Component State Change ===================//

//  class App extends React.Component {
//   constructor(){
//     super();
//     this.state ={
//       // data:"BMW"
//       data:1
//         }
//   }

//   apple(){
//     // alert("Apllee there")
//     // this.setState({data :"PORSCHE"})
//     this.setState({data : this.state.data + 1})
//   }

//   render(){
//     return (
//       <>
//         <h1>{this.state.data} </h1>
//         <button onClick={()=>{this.apple()}}>Update the data</button>
        
//       </>
//     )
//   }
// }

// export default App ;