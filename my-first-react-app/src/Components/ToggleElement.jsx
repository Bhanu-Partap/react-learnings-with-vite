// import React from 'react'
import useState  from 'react'

export default function ToggleElement() {
    const [status, setStatus] = useState(true);
    return (
        <>
            {
                status ? <h1>Some Content</h1> : null
            }
            <button onClick={() => setStatus(false)}> Hide Content</button>
            <button onClick={() => setStatus(true)}> Show Content</button>
        </>
    )
}
