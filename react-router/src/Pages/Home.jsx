
export default function Home() {
  return (
    <> 
      <h1>Home Page</h1>
      <button>Go to Non existing page</button>
      <button onClick= {()=>{<a href="/filter"/> }}>Go to Non Filter page</button>
    </>
  )
}
