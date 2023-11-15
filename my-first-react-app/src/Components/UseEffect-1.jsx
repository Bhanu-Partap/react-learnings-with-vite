import React, {useEffect} from 'react'

export default function UseEffect() {

//=============First method to call useEffect()==================//
    React.useEffect(()=>{
        console.log('This is the first time we are rendering')
    })

//=============Second method to call useEffect()==================//


  return (
    <div>UseEffect-1</div>
  )
}
