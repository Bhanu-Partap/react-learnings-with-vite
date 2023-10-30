// import React from 'react's

import { useState } from "react";

export default function Formbox() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    function changeData(e) {
        e.preventDefault();
    }
    return (
        <>
            <div className="Formbox">
                <h1>Handle Form in React</h1>
                <form onSubmit={changeData} >
                    <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} /> <br /> <br />
                    <select onChange={(e)=>setInterest(e.target.value)}>
                        <option value="">Marvel</option>
                        <option value="">DC</option>
                        <option value="">DC avanti</option>
                    </select> <br /><br />
                    <input type="checkbox" onChange={(e)=>setTnc(true)} /><span>Accept the Terms and Conditions</span>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}
