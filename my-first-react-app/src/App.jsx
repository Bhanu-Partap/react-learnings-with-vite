import './App.css'
import { useState } from 'react'
// import Test from './Components/Test'


function App() {
  const [data, setData] = useState("M8")
  function updateDate(){
    setData("BMW M8")
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateDate}>Update Data </button>
      {/* <Test /> */}
    </>
  )
}

export default App
