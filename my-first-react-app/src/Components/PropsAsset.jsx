// import React from 'react'

export default function PropsAsset(props) {
  return (
    <>
        <div className="PropsAsset">
            <h1>Props Asset</h1>
            <h2>hello {props.name} </h2>
            {/* <button onClick={()=>props.data()}>Call the data</button> */}
        </div>
    </>
  )
}


