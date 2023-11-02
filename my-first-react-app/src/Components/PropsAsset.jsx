// import React from 'react'

export default function PropsAsset(props) {
  return (
    <>
        <div className="PropsAsset">
            <h1>Props Asset</h1>
            <h2>hello </h2>
          {/* /==== If you want to show the functionality defined in parent component after some time or have to check the states brfore hitting the props. You can use with arrow function */} 
            <button onClick={()=>props.name()}>Call the data</button>  

          {/* /==== If you want to show the functionality defined in parent component directly without any wait. You can use with arrow function */} 
            <button onClick={props.name}>Call the data</button>
        </div>
    </>
  )
}


