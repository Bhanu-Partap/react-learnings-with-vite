import { Link,Outlet } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>
      <Link to="company"> Company</Link>
      <Link to="fellony" >Fellony</Link>
      <Outlet />
    </>
  )
}
