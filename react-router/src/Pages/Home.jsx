import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()
  return (
    <> 
      <h1>Home Page</h1>
      <button onClick= {()=>navigate("/about")}>Go to  About page</button>
    </>
  )
}
