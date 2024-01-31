import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
        <h1> 404 Page</h1>
        <h4>You have been entered the wrong url, Check it again !!</h4>
        <p> Redirect to <Link to="/">  Home Page </Link></p>
    </>
  )
}
 