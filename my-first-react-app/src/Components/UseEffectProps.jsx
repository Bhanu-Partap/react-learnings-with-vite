import  { useEffect } from 'react'

function UseEffectProps(props) {

    useEffect(() => {
        console.warn("UseEffect called before the updation of count")
    }, [props.count])

    return (
        <>
            <h1>count : {props.count}</h1>
            <h1>Name : {props.name}</h1>
            {/* <button onClick={()=>props.count+1}>Update Count</button> */}
            {/* <button onClick={()=>props.count+1}>Update count</button> */}
        </>
    )
}


export default UseEffectProps;