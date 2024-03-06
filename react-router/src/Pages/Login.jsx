// import React from 'react'

export default function Login() {

    const login = ()=>{
        localStorage.setItem("login",true)
    }

  return (
    <>
        <h1>Login Page</h1>
        <input type="text" /> <br />
        <input type="text" /><br />
        <button onClick={login}>Login</button>
    </>
  )
}
