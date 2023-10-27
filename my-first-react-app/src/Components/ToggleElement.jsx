import React from 'react'

export default function ToggleElement() {
  return (
    <>
    <h1>Some Content</h1>
    <button onClick={()=>setState(false)}> Hide Content</button>
    <button onClick={()=>setState(true)}> Show Content</button>
    </>
  )
}
