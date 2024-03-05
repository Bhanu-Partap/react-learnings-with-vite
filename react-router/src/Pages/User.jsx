import {useParams, useLocation} from "react-router-dom"

export default function User() {
  const {id = 452} = useParams(); 
  const location = useLocation();
  console.log(location);
  return (
    <>
          <h1>User Page with {id} id</h1>
    </>
  )
}
