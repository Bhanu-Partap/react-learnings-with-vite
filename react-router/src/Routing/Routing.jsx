import {BrowserRouter, Routes, Route} from "react-router-dom"
import  Home  from '../Pages/Home.jsx'
import  About  from '../Pages/About.jsx'
import Page404 from "../Pages/Page404.jsx"
import User from "../Pages/User.jsx"

export default function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/*' element={<Page404 />} />
                <Route path='/user/:id' element={<User />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}