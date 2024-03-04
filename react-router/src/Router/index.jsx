import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from '../Pages/Home.jsx'
import About from '../Pages/About.jsx'
import Page404 from "../Pages/Page404.jsx"
import User from "../Pages/User.jsx"
import PublicLayout from "../Layout/PublicLayout/index.jsx"
import Contact from "../Pages/Contact.jsx"
import Company from "../Components/Company.jsx"
import Fellony from "../Components/Fellony.jsx"
import Filter from "../Pages/Filter.jsx"

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route element={<PublicLayout />} >
            <Route path='/home' element={<Home />} />   
            <Route path='/about' element={<About />} />
            <Route path='/filter' element={<Filter />} />
            <Route path='/user/:id' element={<User />} />
            <Route path='/*' element={<Page404 />} />
            <Route path='/contact' element={<Contact />}>
              <Route path="company" element={<Company />} />
              <Route path="fellony" element={<Fellony />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
