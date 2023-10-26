// import React from 'react'

 function Student(props) {
  return (
    <>
        <h1>{props.name }</h1>
        <h3>Email : {props.email }</h3>
        <h3>Address : {props.other.address }</h3>
    </>
  )
}
export default Student