import { Link } from "react-router-dom";
// import {useParams} from "react"

export default function About() {
  // const {id = 45} = useParams()
  return (
    <> 
      <h1>About Page</h1>
      <Link to="user/452"> user</Link> <br />
      {/* <Link to="user/453"> Go To {id} Profile</Link> */}
    </>
  )
}
