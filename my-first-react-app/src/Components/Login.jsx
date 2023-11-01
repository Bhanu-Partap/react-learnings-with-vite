import { useState } from 'react'

export default function Login() {
    const [user, setUser] = useState(false);
    const [password, setPassword] = useState(false);
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandle(e) {
        if(user.length  <3 ||   password.length <8){
            alert("type correct values")
        }
         else{
            alert("Everything 'fine ")
         }
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
        setUser(item);
    }

    function passwordHandler(e) {
        let item = e.target.value;

        if (item.length < 8) {
            setPassErr(true);
        }
        else{
            setPassErr(false)
        }
        setPassword(item);
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
