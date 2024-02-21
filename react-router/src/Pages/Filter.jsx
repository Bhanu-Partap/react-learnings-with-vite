// import React from 'react'
import { useSearchParams } from "react-router-dom"

export default function Filter() {
    
    const [searchParams, setSearchParams] = useSearchParams()

    const age = searchParams.get('age');
    const city = searchParams.get('city');


  return (
    <>
        <h1>Filter page</h1>
        <h3>Age : {age}</h3>
        <h3>City : {city}</h3>

        {/* USING SETsEARCHpARAMS */}
        <button onClick={()=>setSearchParams({age :22, city: 'Ludhiana'})}>Set the value to the query params </button>

    </>
  )
}
