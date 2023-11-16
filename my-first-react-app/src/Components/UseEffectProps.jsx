import  { useEffect } from 'react'

function UseEffectProps(props) {

    useEffect(() => {
        alert("UseEffect called")
    }, [])

    return (
        <>
            <h1>count : {props.count}</h1>
            <h1>Name : {props.name}</h1>
        </>
    )
}


export default UseEffect;