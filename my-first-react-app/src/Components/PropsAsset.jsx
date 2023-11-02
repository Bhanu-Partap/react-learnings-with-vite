// import React from 'react'

export default function PropsAsset(props) {
  return (
    <>
        <div className="PropsAsset">
            <h1>Props Asset</h1>
            <h2>hello </h2>
            <button onClick={props.name}>Call the data</button>
        </div>
    </>
  )
}


