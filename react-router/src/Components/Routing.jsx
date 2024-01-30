import {BrowserRouter, Routes, Route} from "react-router-dom"
import  Home  from '../Pages/Home.jsx'
import  About  from '../Pages/About.jsx'

export default function Routing() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
