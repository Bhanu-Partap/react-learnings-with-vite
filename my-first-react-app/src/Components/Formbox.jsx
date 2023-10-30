// import React from 'react's

import { useState } from "react";

export default function Formbox() {

    const [name, setName] = useState("");
    const [tnc, setTnc] = useState("");
    const [interest, setInterest] = useState("");

    function changeData(e){
        e.preventDefault();
    }
  return (
    <>
    <div className="Formbox">
        <h1>Handle Form in React</h1>
        <form  onSubmit={changeData} >
            <input type="text" placeholder='name' /> <br /> <br />
            <select>
                <option value="">Marvel</option>
                <option value="">DC</option>
                <option value="">DC avanti</option>
            </select> <br /><br />
            <input type="checkbox"  /><span>Accept the Terms and Conditions</span>
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}
