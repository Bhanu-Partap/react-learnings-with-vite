// import React from 'react'

import { useState } from "react"

export default function Profile() {
    const [logeedIn, setlogeedIn] = useState(1)
  return (
    <>
        {/* ===================== For only IF ELSE CONDITION ======================== */}
        {/* {logeedIn ? <h1>Profie Page rendered successfully</h1> : <h1>Not Loged In</h1>} */}
        {logeedIn==1 ? <h1>Profie Page rendered successfully 1</h1> : logeedIn==2 ? <h1>Profie Page rendered successfully 2</h1> : <h1>Not Loged In</h1>}
    </>
  )
}
