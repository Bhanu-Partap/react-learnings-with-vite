// import React from 'react's

export default function Formbox() {

    function changeData(e){
        e.preventdefault;
    }
  return (
    <>
    <div className="Formbox">
        <h1>Handle Form in React</h1>
        <form onSubmit={changeData} >
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
