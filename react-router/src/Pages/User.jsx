import useParams from "react-router-dom"

export default function User() {
  const {userName} = useParams();
  return (
    <>
          <h1>{userName} Page</h1>
    </>
  )
}
