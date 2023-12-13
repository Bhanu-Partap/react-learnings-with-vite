import React from 'react'
import Users from './Users'

export default function ParentAlert() {

    function parentAlert(data){
        // alert('Sending data from child to parent')
        alert(data)
    }
  return (
    <>
        <h1>Lifting State Up</h1>
        <Users content={parentAlert} />
    </>
  )
}
