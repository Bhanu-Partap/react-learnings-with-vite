import {useParams} from "react-router-dom"

export default function User() {
  const {Id = 452} = useParams();
  // const {name} = params()

  return (
    <>
          {/* <h1>{name} Page</h1> */}
          <h1>user Page {Id}</h1>
    </>
  )
}
