import React from 'react'

export default function Formbox() {
  return (
    <>
    <div className="Formbox">
        <h1>Handle Form in React</h1>
        <form >
            <input type="text" placeholder='name' /> <br /> <br />
            <select>
                <option value="">Marvel</option>
                <option value="">DC</option>
                <option value="">DC avanti</option>
            </select> <br /><br />
            <input type="checkbox"  /><span>Accept the Terms and Conditions</span>
        </form>
    </div>
    </>
  )
}
