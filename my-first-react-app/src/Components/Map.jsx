import React from 'react'

export default function Map() {
  const students = ["BMW", "McLaren", "Jeep", "Nissan"];

  // students.map((item)=>{
  //     console.warn(item);
  // })
  return (
    <div className="container">
      <h1>Brand names:</h1>
      {
        students.map((carBrands) => {
          <h1 key={carBrands}>{carBrands}</h1>
        })
      }
    </div>
  )
}
