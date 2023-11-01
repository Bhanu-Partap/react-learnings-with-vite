import React, { useState } from 'react'

export default function Login() {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);

    function loginHandle(e) {
        e.preventDefault();
    }

    function userHandler(e) {
        let item = e.target.value;
        let users = ["Bmw", "Bugatti", "M5"];
        for (let i = 0; i <= users.length; i++)
            if (item[i] == users) {
                setUserErr(true);
            }
            else {
                setUserErr(false)
            }
        console.warn(e.target.value.length);
    }



    return (
        <>
            <div className="Login">
                <form onSubmit={loginHandle} >
                    <h1>Login Details</h1>
                    <input type="text" placeholder='User Id' onChange={userHandler} /> {userErr ? <span>User Not Verified</span> : <span>User Verified</span>}
                    <br /> <br />
                    <input type="password" placeholder='password' />
                    <br /><br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </>
    )
}
