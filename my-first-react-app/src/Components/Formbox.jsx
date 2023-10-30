// import React from 'react's

import { useState } from "react";

export default function Formbox() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState(false);
    const [interest, setInterest] = useState("");

    function changeData(e) {
        console.log(name,interest,tnc);
        e.preventDefault();
    }
    return (
        <>
            <div className="Formbox">
                <h1>Handle Form in React</h1>
                <form onSubmit={changeData} >
                    <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} /> <br /> <br />
                    <select onChange={(e)=>setInterest(e.target.value)}>
                        <option>Selet Options</option>    
                        <option>DC</option>
                        <option>Marvel</option>
                    </select> <br /><br />
                    <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)} /><span>Accept the Terms and Conditions</span>
                    <button type="submit">Submit</button>
                    <button type="reset">Clear</button>
                </form>
            </div>
        </>
    )
}
