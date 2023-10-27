import React, { useState } from 'react'

export default function ToggleElement() {
    const [status, seetStatus] = useState();
    return (
        <>
            {

                status ? <h1>Some Content</h1> : null
            }
            <button onClick={() => setState(false)}> Hide Content</button>
            <button onClick={() => setState(true)}> Show Content</button>
        </>
    )
}
