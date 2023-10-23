import { useState } from "react"
import "./App.css"

export default function App() {
  const [data, setData] = useState("M5")

  function updateData() {
    setData("BMW M5");
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>Update the data</button>
    </>
  )
}
