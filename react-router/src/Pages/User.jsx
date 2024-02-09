import {useParams} from "react-router-dom"

export default function User() {
  const {id = 452} = useParams(); 

  return (
    <>
          <h1>User Page with {id} id</h1>
    </>
  )
}
