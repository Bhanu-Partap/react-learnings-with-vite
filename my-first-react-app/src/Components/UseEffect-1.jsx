import  { useEffect, useState } from 'react'
import UseEffectProps from './UseEffectProps';

function UseEffect() {
    const [data, setData] = useState("BMW");
    const [name, setName] = useState("Bugatti");
    const [count, setCount] = useState(1);

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
        console.warn("UseEffect called")
    }, [data])

    return (
        <>
            <h1>{data}</h1>
            <h1> {name}</h1>
            <UseEffectProps count={count} name={"Mclaren"} />
            <button onClick={dataupdate}>Update data</button>
            <button onClick={nameUpdate}>Update name</button>
            <button onClick={()=>setCount(count+1)}>Update count</button>
        </>
    )
}


export default UseEffect;