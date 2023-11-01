import React from 'react'

export default function Login() {
  return (
    <>
        <div className="Login">
            <form >
                <h1>Login Details</h1>
                <input type="text" placeholder='User Id' />
                <br /> <br />
                <input type="text" placeholder='password' />
                <br /><br />
                <button type="submit">Login</button>
            </form>
        </div>
    </>
  )
}
