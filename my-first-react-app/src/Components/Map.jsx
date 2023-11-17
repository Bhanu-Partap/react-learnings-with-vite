// import React from 'react'/ 

export default function Map() {
  const students = ["BMW", "McLaren", "Jeep", "Nissan"];

  //====Map function utilization ============//
  // students.map((item)=>{
  //     console.warn(item);
  // })


  return (
    <div className="container">
      {/* =========== 1 Method for single line statement================ */}
      {/* {
        students.map((carBrands) => 
          <h1 key={carBrands}>{carBrands}</h1>
        )
      } */}
      {/* =========== 2 Method for multi-line statement================ */}
      {
        students.map((carBrands) => {
        return  <h1 key={carBrands}>{carBrands}</h1>
        })
      }
    </div>
  )
}
