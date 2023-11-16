import React from 'react'

export default function Map() {
    const students = ["BMW M5", "M2", "M8"];

    students.map((item)=>{
        console.warn(item);
    })
  return (
    <div className="container">
        <h1>Here's the Map function</h1>
    </div>
  )
}
