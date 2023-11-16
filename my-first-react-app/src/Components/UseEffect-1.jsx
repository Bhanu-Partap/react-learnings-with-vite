import  { useEffect, useState } from 'react'
import UseEffectProps from './UseEffectProps';

function UseEffect() {
    const [data, setData] = useState("BMW");
    const [name, setName] = useState("Bugatti");

    function dataupdate() {
        setData("Porsche")
    }

    function nameUpdate() {
        setName("M 5")

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
            <h1> {name}</h1>
            <UseEffectProps count={1} name={"Mclaren"} />
            <button onClick={dataupdate}>Update data</button>
            <button onClick={nameUpdate}>Update name</button>
        </>
    )
}


export default UseEffect;