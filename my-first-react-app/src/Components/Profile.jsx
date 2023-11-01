// import React from 'react'

import { useState } from "react"

export default function Profile() {
    const [logeedIn, setlogeedIn] = useState(true)
  return (
    <>
        {logeedIn ? <h1>Profie Page rendered successfully</h1> : <h1>Not Loged In</h1>}
    </>
  )
}
