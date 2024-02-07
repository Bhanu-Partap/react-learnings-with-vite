import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import  Home  from '../Pages/Home.jsx'
import  About  from '../Pages/About.jsx'
import Page404 from "../Pages/Page404.jsx"
import User from "../Pages/User.jsx"
// import PublicLayout from "../Layout/PublicLayout/index.jsx"

export default function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                {/* <Route element={<PublicLayout />} /> */}
                  <Route path='/home' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/*' element={<Page404 />} />
                  <Route path='/user/:id' element={<User />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
