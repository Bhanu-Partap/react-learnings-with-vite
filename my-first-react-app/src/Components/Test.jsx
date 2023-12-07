// import React from 'react'

export default function Test() {
  function ClickBait() {
    alert("Clickbaited ")
  }
  return (
      <div>
        <h1> Hello from Test component</h1>
        <button onClick={ClickBait}> Click me</button>
      </div>
  )
}
