import {useParams} from "react-router-dom"

export default function User() {
  const {id = 452} = useParams();
  // const {name} = params()

  return (
    <>
          {/* <h1>{name} Page</h1> */}
          <h1>user Page {id}</h1>
    </>
  )
}
