import "./App.css"
// import Login from "./Components/Login"
// import Formbox from "./Components/Formbox"
// import Profile from "./Components/Profile"
import PropsAsset from "./Components/PropsAsset"
// import InputBox from "./Components/InputBox"
// import ToggleElement from "./Components/ToggleElement"
// import React from "react"
// import { useState } from "react";
// import Student from "./Components/Student";
// import Class from "./Components/Class";





//================ Functional Component State Change ===================//
// import { useState } from "react";

export default function App() {

//=================State Change ==========================================//
  // const [data, setData] = useState("M5")

  // function updateData() {
  //   setData("BMW M5");
  // }

  // const [name, setName] = useState('Lamborghini');

  // function nameChange(){
  //   setName("BMW");
  // }

  function getData(){
    alert("your Data is here");
  }


  return (
    <>
      {/* <h1>{data}</h1>
      <button onClick={updateData}>Update the data</button> */}

{/* ==================================+++++++++Props function passing+++++++++++===================================== */}
      {/* <Student name={name} /> */}

      {/* ========= with Function props change============ */}
      {/* <button onClick={nameChange}>Update Name</button> */}

      {/* ========= with setName props change============ */}
      {/* <button onClick={()=>{setName("BMW")}}>Update Name</button> */}

      
      {/* email= "support.lamborghini@gmail.com" other= {{address:"Italy", number: "50"}}  */}
      {/* <Student name="PORSCHE GT3 RS" email= "support.porsche@gmail.com" other= {{address:"Germany", number: "21"}} />
      <Student name="Koneigsegg" email= "support.koneigsegg@gmail.com" other= {{address:"Germany", number: "24"}}/> */}

{/* Classs Props  */}

      {/* <Class name="Lamborghini" country= "Italian" /> */}

      {/* <InputBox /> */}
      {/* <ToggleElement /> */}

      {/* <Formbox /> */}
      {/* <Profile /> */}
      {/* <Login /> */}
      <PropsAsset data={getData} />

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