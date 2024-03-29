// import React from 'react'
import { Link, useSearchParams, Outlet } from "react-router-dom"

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
        <input type="number" onChange={(e)=>setSearchParams({age :e.target.value})} placeholder="place Set the value to the query params"/> 
        <br />
        <br />
        <Link to="user">User Page</Link>
        <Outlet />
    </>
  )
}
