import React, { useState } from 'react'

export default function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandle(e) {
        e.preventDefault();
    }

    function userHandler(e) {
        let item = e.target.value;

        if (item.length < 3) {
            setUserErr(true);
        }
        else{
            setUserErr(false)
        }
        console.warn(e.target.value.length);
    }

    function passwordHandler(e) {
        let item = e.target.value;

        if (item.length < 8) {
            setPassErr(true);
        }
        else{
            setPassErr(false)
        }
    }



    return (
        <>
            <div className="Login">
                <form onSubmit={loginHandle} >
                    <h1>Login Details</h1>
                    <input type="text" placeholder='User Id' onChange={userHandler} /> {userErr ? <span>User Not Verified</span> : ""}
                    <br /> <br />
                    <input type="password" placeholder='password' onChange={passwordHandler} /> {passErr ? <span>Password not Valid</span> : ""}
                    <br /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}
