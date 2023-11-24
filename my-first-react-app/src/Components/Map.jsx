// import React from 'react'/ 

export default function Map() {
  // const students = ["BMW", "McLaren", "Lamborghini", "Nissan"]; // Single entity array

  const students = [
    {Name: "BMW", Model:"M5", Year:"2019"},
    {Name: "Lamborghini", Model:"SVJ", Year:"2019"},
    {Name: "Nissan", Model:"GTR-R34", Year:"2015"}
  ]; // Multiple entity array

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
      <h1>List is here</h1>
      {
        students.map((carBrands) => {
        return  <h1 key={carBrands.Name}>Brand Name :{carBrands.Name}, {carBrands.Model}, {carBrands.Year}</h1> //the only difference is the return statement , its neended if you want to specify any conditions before the output
        })
      }
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
    </div>
  )
}
