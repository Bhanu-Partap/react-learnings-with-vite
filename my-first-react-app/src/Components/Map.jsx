import React from 'react'

export default function Map() {
  const students = ["BMW", "McLaren", "Jeep", "Nissan"];

  // students.map((item)=>{
  //     console.warn(item);
  // })
  return (
    <div className="container">
      {
        students.map((carBrands) => {
          // console.warn(carBrands);
          <h1>Brand names {carBrands}</h1>
        })
      }
    </div>
  )
}
