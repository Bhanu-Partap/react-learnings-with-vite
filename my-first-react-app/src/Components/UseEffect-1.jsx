import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [data, setData] = useState("BMW");

    function dataupdate() {
        setData("Porsche")
    }

//=============First method to call useEffect()==================//
// ==== For this method we should not have to import the useEffect =====//
    // React.useEffect(()=>{
    //     console.log('This is the first time we are rendering')
    // })

//=============Second method to call useEffect()==================//
    useEffect(() => {
        alert("UseEffect called")
    }, [data])

    return (
        <>
            <h1>{data}</h1>
            <button onClick={dataupdate}>Update data</button>
        </>
    )
}


export default UseEffect;