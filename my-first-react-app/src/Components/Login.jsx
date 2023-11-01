import React, { useState } from 'react'

export default function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    function loginHandle(e){
        e.preventDefault();
    }

    function userHandler(e){
        let item =e.target.value;
        if(item.length <3){
            console.warn("invalid");
        }
        console.warn(e.target.value.length);
    }

  
  
  return (
    <>
        <div className="Login">
            <form onSubmit={loginHandle} >
                <h1>Login Details</h1>
                <input type="text" placeholder='User Id'  onChange={userHandler}/>
                <br /> <br />
                <input type="text" placeholder='password' />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    </>
  )
}
