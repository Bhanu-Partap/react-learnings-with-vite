import React from 'react'
import Users from './Users'

export default function ParentAlert() {

    function parentAlert(){
        alert('Sending data from child to parent')
    }
  return (
    <>
        <h1>Lifting State Up</h1>
        <Users alert={parentAlert} />
    </>
  )
}
