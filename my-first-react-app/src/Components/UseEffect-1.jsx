import React, {useEffect} from 'react'

export default function UseEffect() {

//=============First method to call useEffect()==================//
// ==== For this method we should not have to import the useEffect =====//
    // React.useEffect(()=>{
    //     console.log('This is the first time we are rendering')
    // })

//=============Second method to call useEffect()==================//
    useEffect(()=>{
        alert("UseEffect called")
    })

  return (
    <h1>useEffect Hook</h1>
  )
}
