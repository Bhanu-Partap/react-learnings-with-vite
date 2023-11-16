import React from 'react'

export default function Map() {
    const students = ["BMW", "McLaren", "Jeep", "Nissan"];

    students.map((item)=>{
        console.warn(item);
    })
  return (
    <div className="container">
        <h1>Here's the Map function</h1>
    </div>
  )
}
