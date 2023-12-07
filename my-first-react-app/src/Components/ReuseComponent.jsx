import React from 'react'
import Test from './Test'

export default function ReuseComponent() {

    const users= [
        {Name: "BMW", Model: "M5", Year: "2022" },
        {Name: "McLaren", Model: "P1", Year: "2022" },
        {Name: "Mercedes", Model: "AMG-G63", Year: "2022" },
        {Name: "Lamborghini", Model: "SV Roadster", Year: "2022" }
    ]
  return (
    <>
        <h1>The Reuse Component</h1>

        {
            users.map((item)=>
            <Test data={item} />
            )
        }
    </>
  )
}
